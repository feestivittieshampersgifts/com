(() => {
  const selector = document.querySelector("#hamper-tier");
  if (!selector) return;

  const brand = "Feestivities Hampers & Gifts";
  const image = document.querySelector("#selected-package-image");
  const packageArt = document.querySelector("#package-art");
  const packageName = document.querySelector("#selected-package-name");
  const packageCaption = document.querySelector("#selected-package-caption");
  const sourceNote = document.querySelector("#package-source-note");
  const orderLink = document.querySelector("#order-selected-package");
  const cards = [...document.querySelectorAll("[data-tier-choice]")];
  const lists = [...document.querySelectorAll("[data-package]")];
  const dialog = document.querySelector("#package-image-dialog");
  const dialogImage = document.querySelector("#package-image-large");
  const dialogCaption = document.querySelector("#package-image-caption");
  const openImage = document.querySelector("#open-package-image");
  const closeImage = document.querySelector("#close-package-image");

  const portraitTiers = new Set(["275000", "360000", "550000"]);
  const tierInfo = {
    "30000": { name: "₦30,000 Christmas hamper", image: "assets/holiday/christmas-hamper-30k.jpg", alt: "Separate supplied flyer image for the ₦30,000 Christmas and New Year hamper", note: "Items are transcribed from the supplied flyer. Ask us to confirm current availability before ordering." },
    "50000": { name: "₦50,000 Christmas hamper", image: "assets/holiday/christmas-hamper-50k.jpg", alt: "Separate supplied flyer image for the ₦50,000 Christmas and New Year hamper", note: "Items are transcribed from the supplied flyer. Ask us to confirm current availability before ordering." },
    "100000": { name: "₦100,000 Christmas hamper", image: "assets/holiday/christmas-hamper-100k.jpg", alt: "Separate supplied flyer image for the ₦100,000 Christmas and New Year hamper", note: "Items are transcribed from the supplied flyer. Ask us to confirm current availability before ordering." },
    "250000": { name: "₦250,000 Christmas hamper", image: "assets/holiday/christmas-hamper-250k.jpg", alt: "Separate supplied flyer image for the ₦250,000 Christmas and New Year hamper", note: "Some of the supplied artwork's smallest print is not fully legible. Please confirm the complete contents with us before ordering." },
    "275000": { name: "₦275,000 Classic hamper", image: "assets/holiday/christmas-hamper-275k.jpg", alt: "Separate full-height price and item panel for the ₦275,000 Classic hamper", note: "This separate full-height panel makes the printed contents easier to read. Please confirm current availability and any substitutions before ordering." },
    "360000": { name: "₦360,000 Premium hamper", image: "assets/holiday/christmas-hamper-360k.jpg", alt: "Separate full-height price and item panel for the ₦360,000 Premium hamper", note: "This separate full-height panel makes the printed contents easier to read. The source wording for one listed item is unclear; please confirm it and current availability before ordering." },
    "550000": { name: "₦550,000 Executive Luxury hamper", image: "assets/holiday/christmas-hamper-550k.jpg", alt: "Separate full-height price and item panel for the ₦550,000 Executive Luxury hamper", note: "This separate full-height panel makes the printed contents easier to read. One small-print garlic-item line remains unclear; please confirm the exact item and current availability before ordering." }
  };

  const makeWhatsAppUrl = (price, name) => {
    const message = `Hello ${brand}, I am interested in the ${name}. Please confirm the current items, availability and how to order.`;
    return `https://wa.me/2348109771274?text=${encodeURIComponent(message)}`;
  };

  const chooseTier = (value, focus = false) => {
    const tier = tierInfo[value];
    if (!tier) return;
    selector.value = value;
    image.src = tier.image;
    image.alt = tier.alt;
    packageName.textContent = tier.name;
    packageCaption.textContent = `Separate image for ${tier.name} from the supplied artwork. Open it to inspect the image.`;
    sourceNote.textContent = tier.note;
    orderLink.href = makeWhatsAppUrl(value, tier.name);
    packageArt.classList.toggle("has-portrait", portraitTiers.has(value));
    cards.forEach((card) => {
      const selected = card.dataset.tierChoice === value;
      card.classList.toggle("is-selected", selected);
      card.setAttribute("aria-pressed", String(selected));
    });
    lists.forEach((list) => {
      const selected = list.dataset.package === value;
      list.hidden = !selected;
      list.classList.toggle("is-active", selected);
    });
    if (focus) {
      document.querySelector("#selected-hamper-details")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", "select_item", {
        item_list_name: "Christmas & New Year Hampers",
        currency: "NGN",
        value: Number(value),
        items: [{ item_id: value, item_name: tier.name, price: Number(value), quantity: 1 }]
      });
    }
  };

  selector.addEventListener("change", () => chooseTier(selector.value));
  cards.forEach((card) => card.addEventListener("click", () => chooseTier(card.dataset.tierChoice, true)));

  const showDialog = () => {
    const tier = tierInfo[selector.value];
    if (!dialog || !dialogImage || !tier) return;
    dialogImage.src = tier.image;
    dialogImage.alt = tier.alt;
    dialogCaption.textContent = `${tier.name} — separate supplied price-tier image`;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else window.open(tier.image, "_blank", "noopener,noreferrer");
  };
  openImage?.addEventListener("click", showDialog);
  closeImage?.addEventListener("click", () => dialog?.close());
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  chooseTier(selector.value);
})();

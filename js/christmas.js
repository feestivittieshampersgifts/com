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
  const highlight = document.querySelector("#premium-package-focus");
  const cards = [...document.querySelectorAll("[data-tier-choice]")];
  const lists = [...document.querySelectorAll("[data-package]")];
  const dialog = document.querySelector("#package-image-dialog");
  const dialogImage = document.querySelector("#package-image-large");
  const dialogCaption = document.querySelector("#package-image-caption");
  const openImage = document.querySelector("#open-package-image");
  const closeImage = document.querySelector("#close-package-image");
  const fullFlyer = "/manus-storage/christmas-season-flyer_0f5daa36.jpg";

  const tierInfo = {
    "30000": { name: "₦30,000 Christmas hamper", image: "/manus-storage/christmas-hamper-30k_6fb6ea8e.jpg", zoom: "/manus-storage/christmas-hamper-30k_6fb6ea8e.jpg", alt: "The supplied Christmas and New Year ₦30,000 hamper package artwork", column: null, note: "Items are transcribed from the supplied flyer. Ask us to confirm current availability before ordering." },
    "50000": { name: "₦50,000 Christmas hamper", image: "/manus-storage/christmas-hamper-50k_7fb014f1.jpg", zoom: "/manus-storage/christmas-hamper-50k_7fb014f1.jpg", alt: "The supplied Christmas and New Year ₦50,000 hamper package artwork", column: null, note: "Items are transcribed from the supplied flyer. Ask us to confirm current availability before ordering." },
    "100000": { name: "₦100,000 Christmas hamper", image: "/manus-storage/christmas-hamper-100k_f8b1f1f9.jpg", zoom: "/manus-storage/christmas-hamper-100k_f8b1f1f9.jpg", alt: "The supplied Christmas and New Year ₦100,000 hamper package artwork", column: null, note: "Items are transcribed from the supplied flyer. Ask us to confirm current availability before ordering." },
    "250000": { name: "₦250,000 Christmas hamper", image: "/manus-storage/christmas-hamper-250k_0b3e7d86.jpg", zoom: "/manus-storage/christmas-hamper-250k_0b3e7d86.jpg", alt: "The supplied Christmas and New Year ₦250,000 hamper package artwork", column: null, note: "The supplied artwork's smallest print is not fully legible. Please confirm the complete contents with us before ordering." },
    "275000": { name: "₦275,000 Classic hamper", image: fullFlyer, zoom: fullFlyer, alt: "Original supplied artwork with the ₦275,000 Classic hamper highlighted", column: 0, note: "The higher-priced package lists are in very small print in the supplied artwork. Please ask us to confirm the complete current contents before ordering." },
    "360000": { name: "₦360,000 Premium hamper", image: fullFlyer, zoom: fullFlyer, alt: "Original supplied artwork with the ₦360,000 Premium hamper highlighted", column: 1, note: "The higher-priced package lists are in very small print in the supplied artwork. Please ask us to confirm the complete current contents before ordering." },
    "550000": { name: "₦550,000 Executive Luxury hamper", image: fullFlyer, zoom: fullFlyer, alt: "Original supplied artwork with the ₦550,000 Executive Luxury hamper highlighted", column: 2, note: "The higher-priced package lists are in very small print in the supplied artwork. Please ask us to confirm the complete current contents before ordering." }
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
    packageCaption.textContent = value === "275000" || value === "360000" || value === "550000"
      ? "Original flyer; the selected premium tier is outlined. Open the image to view the full artwork."
      : "The supplied Christmas & New Year hamper artwork";
    sourceNote.textContent = tier.note;
    orderLink.href = makeWhatsAppUrl(value, tier.name);
    packageArt.classList.toggle("is-premium", tier.column !== null);
    if (highlight) {
      highlight.hidden = tier.column === null;
      if (tier.column !== null) highlight.dataset.column = String(tier.column);
    }
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
    dialogImage.src = tier.zoom;
    dialogImage.alt = tier.alt;
    dialogCaption.textContent = `${tier.name} — supplied Christmas and New Year artwork`;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else window.open(tier.zoom, "_blank", "noopener,noreferrer");
  };
  openImage?.addEventListener("click", showDialog);
  closeImage?.addEventListener("click", () => dialog?.close());
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  chooseTier(selector.value);
})();

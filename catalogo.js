const whatsappNumber = "5531984213500";
const assetPath = "../assets/produtos/";
const pageParams = new URLSearchParams(window.location.search);
const requestedMode = pageParams.get("modo");
const modeText =
  requestedMode === "aluguel"
    ? " para aluguel"
    : requestedMode === "compra"
      ? " para compra"
      : "";

const products = [
  {
    id: "cama-hospitalar",
    category: "camas",
    label: "Camas e transferência",
    name: "Cama hospitalar manual de 3 manivelas",
    image: "cama-hospitalar-3-manivelas-atualizada.webp",
    description:
      "Modelo reforçado que regula a altura, eleva a cabeceira e levanta as pernas.",
    rentPrice: "R$ 200,00 por 30 dias",
    salePrice: "Venda: consulte o valor",
    specifications: [
      "3 manivelas",
      "Regulagem de altura",
      "Elevação da cabeceira e das pernas",
      "Colchão impermeável incluído por empréstimo na locação",
      "Para venda: modelo novo, todo em aço reforçado",
    ],
  },
  {
    id: "cama-hospitalar-manual-2-movimentos",
    category: "camas",
    label: "Camas e transferência",
    name: "Cama hospitalar manual de 2 manivelas",
    image: "cama-hospitalar-manual-2-movimentos.webp",
    description:
      "Modelo manual em aço branco, com duas manivelas e grades laterais.",
    rentPrice: "R$ 150,00 por 30 dias",
    salePrice: "Venda: consulte o valor",
    specifications: [
      "2 manivelas",
      "Estrutura em aço na cor branca",
      "Grades laterais",
      "Colchão impermeável incluído por empréstimo na locação",
      "Para venda: modelo novo",
    ],
  },
  {
    id: "cama-hospitalar-abs-motorizada",
    category: "camas",
    label: "Camas e transferência",
    name: "Cama hospitalar elétrica de 3 movimentos",
    image: "cama-hospitalar-abs-motorizada.webp",
    description:
      "Modelo elétrico reforçado que regula a altura, eleva a cabeceira e levanta as pernas.",
    rentPrice: "R$ 400,00 por 30 dias",
    salePrice: "Venda: consulte o valor",
    specifications: [
      "3 movimentos elétricos",
      "Regulagem de altura",
      "Elevação da cabeceira e das pernas",
      "Colchão impermeável incluído por empréstimo na locação",
      "Para venda: modelo novo, com estrutura em aço reforçada",
    ],
  },
  {
    id: "guincho-hidraulico",
    category: "camas",
    label: "Camas e transferência",
    name: "Guincho para transferência de pacientes",
    image: "guincho-transferencia-4x3.jpeg",
    description:
      "Equipamento com sling para auxiliar a transferência do paciente com mais segurança e menos esforço.",
  },
  {
    id: "cadeira-rodas-manual",
    category: "cadeiras-rodas",
    label: "Cadeiras de rodas",
    name: "Cadeira de rodas básica",
    image: "cadeira-rodas-manual-4x3.jpeg",
    description:
      "Modelo manual básico para mobilidade e cuidados do dia a dia.",
    rentPrice: "A partir de R$ 90,00 por 30 dias",
    specifications: [
      "Modelo manual",
      "Uso por 30 dias",
      "Consulte medidas e capacidade disponíveis",
    ],
  },
  {
    id: "cadeira-rodas-apoio-elevavel",
    category: "cadeiras-rodas",
    label: "Cadeiras de rodas",
    name: "Cadeira de rodas linha conforto",
    image: "cadeira-rodas-apoio-elevavel.webp",
    description:
      "Modelo confortável e desmontável para facilitar o uso, o transporte e os cuidados diários.",
    rentPrice: "R$ 120,00 por 30 dias",
    specifications: [
      "Suportes de braço eleváveis",
      "Encosto das costas rebatível",
      "Rodas removíveis",
      "Suportes para os pés removíveis",
    ],
  },
  {
    id: "cadeira-rodas-elevacao-pernas",
    category: "cadeiras-rodas",
    label: "Cadeiras de rodas",
    name: "Cadeira de rodas com elevação de pernas",
    image: "cadeira-rodas-elevacao-pernas.webp",
    description:
      "Modelo com apoios reguláveis que permitem elevar e manter as pernas em uma posição confortável, com ajuste simples e sem esforço.",
    rentPrice: "R$ 150,00 por 30 dias",
    specifications: [
      "Apoios de pernas eleváveis",
      "Regulagem de posição",
      "Apoios acolchoados para maior conforto",
      "Permite manter as pernas elevadas com menos esforço",
    ],
  },
  {
    id: "cadeira-banho-rodas",
    category: "banho",
    label: "Banho e higiene",
    name: "Cadeira de banho básica azul",
    image: "cadeira-banho-basica-azul.webp",
    description:
      "Modelo sem acolchoamento, confortável e indicado para portas de banheiro de até 60 cm.",
    rentPrice: "A partir de R$ 90,00 por 30 dias",
    specifications: [
      "Comadre incluída",
      "Sem acolchoamento",
      "Confortável para o paciente",
      "Indicada para portas de até 60 cm",
    ],
  },
  {
    id: "cadeira-higienica-preta-com-rodas",
    category: "banho",
    label: "Banho e higiene",
    name: "Cadeira de banho bem básica",
    image: "cadeira-higienica-preta-com-rodas-4x3.jpeg",
    description:
      "Modelo básico com rodas, braços de apoio e assento sanitário.",
    rentPrice: "R$ 80,00 por 30 dias",
    specifications: [
      "Modelo básico",
      "Estrutura com rodas",
      "Assento sanitário",
      "Apoio frontal para os pés",
    ],
  },
  {
    id: "cadeira-higienica-fixa",
    category: "banho",
    label: "Banho e higiene",
    name: "Cadeira de banho acolchoada azul",
    image: "cadeira-banho-acolchoada-azul.webp",
    description:
      "Modelo azul acolchoado, confortável e preparado para atender melhor o paciente.",
    rentPrice: "A partir de R$ 120,00 por 30 dias",
    specifications: [
      "Assento e encosto acolchoados",
      "Comadre acoplada",
      "Rodas para deslocamento",
      "Apoio para os pés",
    ],
  },
  {
    id: "andador-dobravel",
    category: "mobilidade",
    label: "Mobilidade",
    name: "Andador reforçado de alumínio",
    image: "andador-dobravel-4x3.jpeg",
    description:
      "Andador leve, reforçado e ajustável para dar apoio e estabilidade durante a caminhada.",
    rentPrice: "R$ 50,00 por 30 dias",
    specifications: [
      "Estrutura reforçada de alumínio",
      "Altura ajustável",
      "Ponteiras emborrachadas",
      "Dobrável para facilitar o transporte",
    ],
  },
  {
    id: "muletas-axilares",
    category: "mobilidade",
    label: "Mobilidade",
    name: "Par de muletas de alumínio",
    image: "muletas-axilares-aluminio.webp",
    description:
      "Par de muletas de alumínio disponível em vários tamanhos e também no modelo universal.",
    rentPrice: "R$ 50,00 por 30 dias",
    specifications: [
      "O aluguel inclui o par",
      "Vários tamanhos disponíveis",
      "Modelo universal disponível",
      "Regulagem de altura",
    ],
  },
  {
    id: "muleta-canadense",
    category: "mobilidade",
    label: "Mobilidade",
    name: "Muleta canadense (par)",
    image: "muleta-canadense.webp",
    description:
      "Par de muletas canadenses de alumínio com apoio de antebraço para auxiliar a mobilidade no dia a dia.",
    rentPrice: "R$ 50,00 por 30 dias",
    specifications: [
      "Apoio de antebraço",
      "Regulagem de altura",
      "Ponteiras emborrachadas",
      "Consulte tamanhos e disponibilidade",
    ],
  },
  {
    id: "bengala-ajustavel",
    category: "mobilidade",
    label: "Mobilidade",
    name: "Bengala ajustável",
    image: "bengala-ajustavel-atualizada.jpeg",
    description:
      "Bengala de alumínio com ajuste de altura e apoio ergonômico para o uso diário.",
  },
  {
    id: "colchao-pneumatico",
    category: "colchoes",
    label: "Colchões",
    name: "Colchão pneumático anti-escaras",
    image: "colchao-pneumatico.webp",
    description:
      "Colchão de pressão alternada com bomba elétrica para auxiliar nos cuidados prolongados.",
  },
  {
    id: "colchao-hospitalar",
    category: "colchoes",
    label: "Colchões",
    name: "Colchão hospitalar impermeável",
    image: "colchao-hospitalar.webp",
    description:
      "Colchão hospitalar com capa impermeável para facilitar a higienização e o cuidado cotidiano.",
  },
  {
    id: "colchao-espuma-perfilada",
    category: "colchoes",
    label: "Colchões",
    name: "Colchão de espuma perfilada caixa de ovo",
    image: "colchao-espuma-perfilada.jpeg",
    description:
      "Espuma perfilada ventilada para proporcionar mais conforto e melhor distribuição do apoio. Consulte medidas e densidades disponíveis.",
  },
  {
    id: "monitor-pressao",
    category: "acessorios",
    label: "Medidores e acessórios",
    name: "Aparelho digital de pressão",
    image: "monitor-pressao.webp",
    description:
      "Monitor digital para acompanhamento da pressão arterial em casa.",
  },
  {
    id: "oximetro",
    category: "acessorios",
    label: "Medidores e acessórios",
    name: "Oxímetro de pulso G-Tech",
    image: "oximetro-gtech.webp",
    description:
      "Aparelho compacto com visor digital para acompanhar saturação de oxigênio e frequência cardíaca.",
  },
  {
    id: "termometro",
    category: "acessorios",
    label: "Medidores e acessórios",
    name: "Termômetro digital G-Tech",
    image: "termometro-digital-gtech.webp",
    description:
      "Termômetro clínico digital para medição prática da temperatura corporal. Consulte disponibilidade do modelo.",
  },
  {
    id: "kit-glicose",
    category: "acessorios",
    label: "Medidores e acessórios",
    name: "Kit de monitoramento de glicose",
    image: "kit-glicose.webp",
    description:
      "Kit para acompanhamento da glicose. Consulte os componentes e consumíveis disponíveis.",
  },
  {
    id: "escadinha-medica",
    category: "acessorios",
    label: "Medidores e acessórios",
    name: "Escadinha médica de dois degraus",
    image: "escadinha-medica.webp",
    description:
      "Escadinha com superfície antiderrapante para auxiliar o acesso ao leito.",
  },
  {
    id: "bota-ortopedica",
    category: "acessorios",
    label: "Medidores e acessórios",
    name: "Bota ortopédica imobilizadora",
    image: "bota-ortopedica-4x3.jpeg",
    description:
      "Bota com tiras ajustáveis para imobilização, disponível nos tamanhos P, M e G.",
    rentPrice: "R$ 50,00 por 30 dias",
    specifications: [
      "Tamanhos P, M e G",
      "Tiras ajustáveis",
      "Confirme o tamanho e a indicação antes do aluguel",
    ],
  },
  {
    id: "tipoia-imobilizadora",
    category: "acessorios",
    label: "Ortopedia e recuperação",
    name: "Tipoia imobilizadora de braço",
    image: "tipoia-imobilizadora.webp",
    description:
      "Tipoia acolchoada com alça regulável para apoio e imobilização do braço durante a recuperação.",
  },
  {
    id: "imobilizador-joelho",
    category: "acessorios",
    label: "Ortopedia e recuperação",
    name: "Imobilizador articulado de joelho",
    image: "imobilizador-joelho.webp",
    description:
      "Órtese ajustável com cintas de fixação para estabilização do joelho. Consulte tamanhos disponíveis.",
  },
  {
    id: "comadre-hospitalar",
    category: "acessorios",
    label: "Higiene e cuidados",
    name: "Comadre hospitalar plástica",
    image: "comadre-hospitalar.webp",
    description:
      "Comadre plástica para auxiliar a higiene e as necessidades fisiológicas de pessoas com mobilidade reduzida.",
  },
  {
    id: "urinol-masculino",
    category: "acessorios",
    label: "Higiene e cuidados",
    name: "Urinol masculino com tampa",
    image: "urinol-masculino.webp",
    description:
      "Recipiente plástico com alça e tampa, indicado para auxiliar os cuidados de pessoas com mobilidade reduzida.",
  },
  {
    id: "massageador-orbital",
    category: "acessorios",
    label: "Cuidados e bem-estar",
    name: "Massageador orbital Dellamed 127V",
    image: "massageador-orbital-dellamed.jpeg",
    description:
      "Massageador corporal com ajuste de intensidade e cabeças intercambiáveis para diferentes tipos de massagem. Consulte disponibilidade.",
  },
];

const grid = document.getElementById("catalog-grid");
const resultsLabel = document.getElementById("results-label");
const empty = document.getElementById("catalog-empty");
const dialog = document.getElementById("product-dialog");
const selected = new Set();
let currentProduct = null;

function whatsappUrl(message) {
  return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}

function priceMarkup(product, className = "product-prices") {
  const salePrice = product.salePrice
    ? product.salePrice.replace("Venda: ", "")
    : "consulte o valor";
  const rentCard = product.rentPrice
    ? `<span><small>Aluguel</small><strong>${product.rentPrice}</strong></span>`
    : "";
  return `<div class="${className}">${rentCard}<span><small>Compra</small><strong>${salePrice}</strong></span></div>`;
}

function renderProducts(filter = "todos") {
  const visible =
    filter === "todos"
      ? products
      : products.filter((product) => product.category === filter);
  resultsLabel.textContent = `${visible.length} ${visible.length === 1 ? "produto" : "produtos"}`;
  empty.hidden = visible.length > 0;
  grid.innerHTML = visible
    .map(
      (product) => `
    <article class="catalog-card" data-product-id="${product.id}">
      <button class="catalog-card__image" type="button" data-details="${product.id}" aria-label="Ver detalhes de ${product.name}">
        <img src="${assetPath}${product.image}" alt="${product.name}" loading="lazy" width="600" height="520">
      </button>
      <div class="catalog-card__body">
        <span class="product-meta">${product.label}</span>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        ${priceMarkup(product)}
        <div class="catalog-card__actions">
          <button class="button button--outline" type="button" data-details="${product.id}">Ver detalhes</button>
          <button class="selection-add ${selected.has(product.id) ? "is-selected" : ""}" type="button" data-add="${product.id}">${selected.has(product.id) ? "✓ Selecionado" : "+ Selecionar"}</button>
        </div>
      </div>
    </article>`,
    )
    .join("");
}

function setFilter(filter) {
  document
    .querySelectorAll("[data-filter]")
    .forEach((button) =>
      button.classList.toggle("is-active", button.dataset.filter === filter),
    );
  renderProducts(filter);
}

function openDetails(id) {
  currentProduct = products.find((product) => product.id === id);
  if (!currentProduct) return;
  document.getElementById("dialog-image").src =
    `${assetPath}${currentProduct.image}`;
  document.getElementById("dialog-image").alt = currentProduct.name;
  document.getElementById("dialog-category").textContent = currentProduct.label;
  document.getElementById("dialog-name").textContent = currentProduct.name;
  document.getElementById("dialog-description").textContent =
    currentProduct.description;
  document.getElementById("dialog-prices").innerHTML = priceMarkup(
    currentProduct,
    "product-prices product-prices--dialog",
  );
  const specifications = currentProduct.specifications || [
    "Consulte compra ou locação",
    "Confirme disponibilidade",
    "Combine entrega pelo WhatsApp",
  ];
  document.getElementById("dialog-specifications").innerHTML = specifications
    .map((item) => `<span>✓ ${item}</span>`)
    .join("");
  const knownPrice = currentProduct.rentPrice
    ? ` O valor informado para aluguel é ${currentProduct.rentPrice}.`
    : "";
  document.getElementById("dialog-whatsapp").href = whatsappUrl(
    `Olá! Vi no catálogo da Emunah o produto “${currentProduct.name}”.${knownPrice} Gostaria de consultar${modeText} disponibilidade e entrega, por favor.`,
  );
  updateDialogAdd();
  dialog.showModal();
}

function updateDialogAdd() {
  if (!currentProduct) return;
  const button = document.getElementById("dialog-add");
  button.textContent = selected.has(currentProduct.id)
    ? "✓ Adicionado à seleção"
    : "Adicionar à seleção";
  button.classList.toggle("is-selected", selected.has(currentProduct.id));
}

function toggleProduct(id) {
  selected.has(id) ? selected.delete(id) : selected.add(id);
  updateSelection();
  const activeFilter =
    document.querySelector("[data-filter].is-active")?.dataset.filter ||
    "todos";
  renderProducts(activeFilter);
  updateDialogAdd();
}

function updateSelection() {
  document.getElementById("selection-count").textContent = selected.size;
  const list = document.getElementById("selection-list");
  const items = products.filter((product) => selected.has(product.id));
  document.getElementById("selection-empty").hidden = items.length > 0;
  list.innerHTML = items
    .map(
      (product) =>
        `<div class="selection-item"><img src="${assetPath}${product.image}" alt=""><div><strong>${product.name}</strong><small>${product.rentPrice || product.label}</small></div><button type="button" data-remove="${product.id}" aria-label="Remover ${product.name}">×</button></div>`,
    )
    .join("");
  const message = items.length
    ? `Olá! Montei uma seleção no catálogo da Emunah e gostaria de consultar${modeText} valores, disponibilidade e entrega:\n\n${items.map((product) => `• ${product.name}${product.rentPrice ? ` — ${product.rentPrice}` : ""}`).join("\n")}\n\nPodem me orientar, por favor?`
    : "Olá! Vi o catálogo da Emunah e gostaria de ajuda para escolher um equipamento hospitalar.";
  document.getElementById("selection-finish").href = whatsappUrl(message);
}

function openSelection() {
  document.body.classList.add("selection-open");
  document
    .getElementById("selection-panel")
    .setAttribute("aria-hidden", "false");
}

function closeSelection() {
  document.body.classList.remove("selection-open");
  document
    .getElementById("selection-panel")
    .setAttribute("aria-hidden", "true");
}

document.addEventListener("click", (event) => {
  const filter = event.target.closest("[data-filter]");
  const details = event.target.closest("[data-details]");
  const add = event.target.closest("[data-add]");
  const remove = event.target.closest("[data-remove]");
  if (filter) setFilter(filter.dataset.filter);
  if (details) openDetails(details.dataset.details);
  if (add) toggleProduct(add.dataset.add);
  if (remove) toggleProduct(remove.dataset.remove);
  if (event.target.closest(".selection-trigger")) openSelection();
  if (event.target.closest("[data-close-selection]")) closeSelection();
  if (event.target.closest("[data-close-dialog]")) dialog.close();
});

document
  .getElementById("dialog-add")
  .addEventListener("click", () => toggleProduct(currentProduct.id));
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeSelection();
});

const requestedCategory = pageParams.get("categoria");
const initialFilter = document.querySelector(
  `[data-filter="${requestedCategory}"]`,
)
  ? requestedCategory
  : "todos";
setFilter(initialFilter);
updateSelection();
document.getElementById("catalog-whatsapp").href = whatsappUrl(
  "Olá! Vi o catálogo da Emunah e gostaria de ajuda para escolher um equipamento hospitalar, por favor.",
);

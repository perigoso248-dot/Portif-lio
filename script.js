"use strict";

// O conteúdo fica no HTML. Este arquivo acrescenta interações sem dependências.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const menuLabel = document.querySelector(".menu-label");
const navigationLinks = document.querySelectorAll('.site-nav a[href^="#"]');
const mobileLayout = window.matchMedia("(max-width: 900px)");

function setMenuOpen(isOpen) {
  const expanded = isOpen && mobileLayout.matches;
  menuButton.setAttribute("aria-expanded", String(expanded));
  menuLabel.textContent = expanded ? "Fechar" : "Menu";
  navigation.classList.toggle("is-open", expanded);
  // Impede foco nos links enquanto o menu móvel está fechado.
  navigation.inert = mobileLayout.matches && !expanded;
}

menuButton.hidden = false;
document.documentElement.classList.add("js");
setMenuOpen(false);

menuButton.addEventListener("click", () => {
  setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setMenuOpen(false);
    navigationLinks.forEach((item) => item.removeAttribute("aria-current"));
    link.setAttribute("aria-current", "location");
    // Leva o foco ao destino, inclusive ao navegar pelo teclado no celular.
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuButton.focus();
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".header-inner") && menuButton.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
  }
});

mobileLayout.addEventListener("change", () => setMenuOpen(false));

// Destaca a seção visível sem alterar a posição da página ou o histórico.
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navigationLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${entry.target.id}`) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  }, { rootMargin: "-15% 0px -55% 0px", threshold: 0 });

  document.querySelectorAll("main > section[id]").forEach((section) => {
    sectionObserver.observe(section);
  });
}

// Os botões copiam o texto dos links, para manter os contatos em uma única fonte.
const copyButtons = document.querySelectorAll("[data-copy-target]");
const copyStatus = document.getElementById("copy-status");

copyButtons.forEach((copyButton) => {
  const contactLink = document.getElementById(copyButton.dataset.copyTarget);
  const contactLabel = copyButton.dataset.copyLabel;
  if (!contactLink || !contactLabel || !copyStatus || contactLink.closest("[hidden]")) return;

  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    // O status é compartilhado; aguarde uma cópia antes de iniciar outra.
    copyButtons.forEach((button) => { button.disabled = true; });
    copyStatus.textContent = "";
    try {
      if (!navigator.clipboard || !navigator.clipboard.writeText) {
        throw new Error("Cópia automática indisponível neste navegador.");
      }
      await navigator.clipboard.writeText(contactLink.textContent.trim());
      copyStatus.textContent = `${contactLabel} copiado!`;
    } catch {
      // Arquivos locais e permissões do navegador podem bloquear a cópia automática.
      const selection = window.getSelection();
      const label = contactLabel.toLocaleLowerCase("pt-BR");
      if (selection) {
        const range = document.createRange();
        range.selectNodeContents(contactLink);
        selection.removeAllRanges();
        selection.addRange(range);
        copyStatus.textContent = `Copie o ${label} selecionado com Ctrl+C, ⌘C ou o menu do celular.`;
      } else {
        copyStatus.textContent = `Selecione e copie o ${label} exibido acima pelo menu do dispositivo.`;
      }
    } finally {
      copyButtons.forEach((button) => { button.disabled = false; });
    }
  });
});

// Sem suporte a dialog ou sem JavaScript, o link abre o arquivo da imagem.
const printerImageLink = document.getElementById("printer-image-link");
const printerImageDialog = document.getElementById("printer-image-dialog");

if (printerImageLink && printerImageDialog && typeof printerImageDialog.showModal === "function") {
  printerImageLink.setAttribute("aria-haspopup", "dialog");
  printerImageLink.setAttribute("aria-controls", printerImageDialog.id);

  printerImageLink.addEventListener("click", (event) => {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    printerImageDialog.showModal();
    document.documentElement.classList.add("image-view-open");
  });

  printerImageDialog.querySelector(".image-viewer-close").addEventListener("click", () => {
    printerImageDialog.close();
  });

  printerImageDialog.addEventListener("click", (event) => {
    if (event.target !== printerImageDialog) return;
    const bounds = printerImageDialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
      printerImageDialog.close();
    }
  });

  // Escape é tratado pelo dialog nativo; todo fechamento restaura o foco.
  printerImageDialog.addEventListener("close", () => {
    document.documentElement.classList.remove("image-view-open");
    printerImageLink.focus({ preventScroll: true });
  });
}

document.getElementById("current-year").textContent = new Date().getFullYear();

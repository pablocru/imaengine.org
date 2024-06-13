import { setupClickOutsideEvent } from "./events-factory";

export function setupDropdown(
  dropdownElement: HTMLElement,
  clickOutsideElement: HTMLElement,
) {
  function closeDropdown() {
    dropdownElement.style.display = "none";
    removeClickOutsideEvent();
  }
  function openDropdown() {
    dropdownElement.style.display = "block";
    addClickOutsideEvent();
  }

  const { addEvent: addClickOutsideEvent, removeEvent: removeClickOutsideEvent } =
    setupClickOutsideEvent(clickOutsideElement, closeDropdown);

  function toggleDropdown() {
    switch (dropdownElement.style.display) {
      case "":
      case "none":
        openDropdown();
        break;
      case "block":
        closeDropdown();
        break;
      default:
        closeDropdown();
        break;
    }
  }

  return toggleDropdown;
}

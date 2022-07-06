"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useModal = exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _reactDom = require("react-dom");

var _react = _interopRequireWildcard(require("react"));

require("./modal.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Création d'un hook personnalisé pour la gestion des données de la fenêtre modale au sein de l'application dans laquelle elle sera déployée
 * @returns {isShowing : constante gérant l'affichage ou non de la modale ; toggle : appel modifiant l'option d'affichage}
 */
const useModal = () => {
  const [isShowing, setIsShowing] = (0, _react.useState)(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle
  };
};
/**
 * 
 * @param {*} objet regroupant les méthodes d'affichage de la modale 
 * @returns Composant représentant la fenêtre modale à afficher dans l'application
 */


exports.useModal = useModal;

const Modal = _ref => {
  let {
    isShowing,
    hide
  } = _ref;
  return isShowing ? /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/_react.default.createElement("div", {
    className: "styledModal",
    onClick: hide,
    onKeyPress: hide
  }, /*#__PURE__*/_react.default.createElement("p", null, "Employ\xE9 cr\xE9\xE9"), /*#__PURE__*/_react.default.createElement("div", {
    id: "closeIcon"
  }, "X")), document.body) : null;
};

var _default = Modal;
exports.default = _default;
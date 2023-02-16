import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, F as append_hydration, C as noop } from "../../chunks/index-edf72ffa.js";
const _page_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let div;
  let a0;
  let t0;
  let t1;
  let a1;
  let t2;
  return {
    c() {
      div = element("div");
      a0 = element("a");
      t0 = text("Bomb");
      t1 = space();
      a1 = element("a");
      t2 = text("King of the hill");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      a0 = claim_element(div_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t0 = claim_text(a0_nodes, "Bomb");
      a0_nodes.forEach(detach);
      t1 = claim_space(div_nodes);
      a1 = claim_element(div_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t2 = claim_text(a1_nodes, "King of the hill");
      a1_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", "bomb");
      attr(a1, "href", "koth");
      attr(div, "class", "gamemode-selector svelte-18xhjbk");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, a0);
      append_hydration(a0, t0);
      append_hydration(div, t1);
      append_hydration(div, a1);
      append_hydration(a1, t2);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};

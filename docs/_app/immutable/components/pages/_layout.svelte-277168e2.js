import { S as SvelteComponent, i as init, s as safe_not_equal, D as create_slot, k as element, a as space, E as head_selector, l as claim_element, h as detach, c as claim_space, n as attr, F as append_hydration, b as insert_hydration, G as update_slot_base, H as get_all_dirty_from_scope, I as get_slot_changes, f as transition_in, t as transition_out } from "../../chunks/index-fa569249.js";
import { b as base } from "../../chunks/paths-69ad0af0.js";
const main = "";
function create_fragment(ctx) {
  let link;
  let meta;
  let t;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[1].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[0],
    null
  );
  return {
    c() {
      link = element("link");
      meta = element("meta");
      t = space();
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-1b0dtwk", document.head);
      link = claim_element(head_nodes, "LINK", { rel: true, href: true });
      meta = claim_element(head_nodes, "META", { name: true, content: true });
      head_nodes.forEach(detach);
      t = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
      this.h();
    },
    h() {
      attr(link, "rel", "manifest");
      attr(link, "href", base + "/manifest.webmanifest");
      attr(meta, "name", "viewport");
      attr(meta, "content", "width=device-width, initial-scale=1.0, viewport-fit=cover");
    },
    m(target, anchor) {
      append_hydration(document.head, link);
      append_hydration(document.head, meta);
      insert_hydration(target, t, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[0],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[0]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[0],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      detach(link);
      detach(meta);
      if (detaching)
        detach(t);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Layout as default
};

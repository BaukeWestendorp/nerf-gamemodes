import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, p as set_style, M as toggle_class, b as insert_hydration, F as append_hydration, K as listen, u as set_data, C as noop, J as component_subscribe, P as set_store_value, x as create_component, y as claim_component, z as mount_component, f as transition_in, t as transition_out, A as destroy_component } from "../../../chunks/index-edf72ffa.js";
import { w as writable } from "../../../chunks/index-42fc002e.js";
const capturingTeam = writable(null);
const Team_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let div2;
  let div0;
  let h3;
  let t0;
  let t1;
  let div1;
  let mounted;
  let dispose;
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      h3 = element("h3");
      t0 = text(
        /*score*/
        ctx[2]
      );
      t1 = space();
      div1 = element("div");
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true, style: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {});
      var div0_nodes = children(div0);
      h3 = claim_element(div0_nodes, "H3", {});
      var h3_nodes = children(h3);
      t0 = claim_text(
        h3_nodes,
        /*score*/
        ctx[2]
      );
      h3_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      children(div1).forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div1, "class", "overlay svelte-372ksy");
      attr(div2, "class", "team svelte-372ksy");
      set_style(
        div2,
        "--color",
        /*color*/
        ctx[0]
      );
      set_style(
        div2,
        "--capturing-progress",
        /*capturingProgress*/
        ctx[3]
      );
      toggle_class(
        div2,
        "capturing",
        /*pointsLeft*/
        ctx[1] > 0
      );
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, h3);
      append_hydration(h3, t0);
      append_hydration(div2, t1);
      append_hydration(div2, div1);
      if (!mounted) {
        dispose = listen(
          div2,
          "pointerdown",
          /*startCapturing*/
          ctx[4]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*score*/
      4)
        set_data(
          t0,
          /*score*/
          ctx2[2]
        );
      if (dirty & /*color*/
      1) {
        set_style(
          div2,
          "--color",
          /*color*/
          ctx2[0]
        );
      }
      if (dirty & /*capturingProgress*/
      8) {
        set_style(
          div2,
          "--capturing-progress",
          /*capturingProgress*/
          ctx2[3]
        );
      }
      if (dirty & /*pointsLeft*/
      2) {
        toggle_class(
          div2,
          "capturing",
          /*pointsLeft*/
          ctx2[1] > 0
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div2);
      mounted = false;
      dispose();
    }
  };
}
const POINTS_PER_SECOND = 10;
const SECONDS_PER_SESSION = 5;
function instance($$self, $$props, $$invalidate) {
  let capturingProgress;
  let $capturingTeam;
  component_subscribe($$self, capturingTeam, ($$value) => $$invalidate(8, $capturingTeam = $$value));
  let { name } = $$props;
  let { color } = $$props;
  const pointsPerSession = POINTS_PER_SECOND * SECONDS_PER_SESSION;
  let score = 0;
  let timer = -1;
  let pointsLeft = 0;
  function startCapturing() {
    stopCapturing();
    $$invalidate(1, pointsLeft = pointsPerSession);
    set_store_value(capturingTeam, $capturingTeam = name, $capturingTeam);
    timer = setInterval(
      () => {
        $$invalidate(2, score++, score);
        $$invalidate(1, pointsLeft--, pointsLeft);
        if (pointsLeft <= 0 || $capturingTeam !== name)
          stopCapturing();
      },
      1e3 / POINTS_PER_SECOND
    );
  }
  function stopCapturing() {
    clearInterval(timer);
    $$invalidate(1, pointsLeft = 0);
  }
  $$self.$$set = ($$props2) => {
    if ("name" in $$props2)
      $$invalidate(5, name = $$props2.name);
    if ("color" in $$props2)
      $$invalidate(0, color = $$props2.color);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*pointsLeft*/
    2) {
      $$invalidate(3, capturingProgress = pointsLeft / pointsPerSession);
    }
  };
  return [color, pointsLeft, score, capturingProgress, startCapturing, name];
}
class Team extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment$1, safe_not_equal, { name: 5, color: 0 });
  }
}
const _page_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let div;
  let team0;
  let t;
  let team1;
  let current;
  team0 = new Team({ props: { name: "Red", color: "red" } });
  team1 = new Team({ props: { name: "Blue", color: "blue" } });
  return {
    c() {
      div = element("div");
      create_component(team0.$$.fragment);
      t = space();
      create_component(team1.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(team0.$$.fragment, div_nodes);
      t = claim_space(div_nodes);
      claim_component(team1.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "teams svelte-8pf9d9");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(team0, div, null);
      append_hydration(div, t);
      mount_component(team1, div, null);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(team0.$$.fragment, local);
      transition_in(team1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(team0.$$.fragment, local);
      transition_out(team1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(team0);
      destroy_component(team1);
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

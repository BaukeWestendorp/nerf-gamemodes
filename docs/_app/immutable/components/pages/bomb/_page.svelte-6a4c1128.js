import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, l as claim_element, m as children, h as detach, n as attr, p as set_style, b as insert_hydration, K as listen, C as noop, L as bubble, a as space, c as claim_space, M as toggle_class, F as append_hydration, N as set_input_value, O as to_number, f as transition_in, t as transition_out, d as check_outros, P as run_all, q as text, r as claim_text, u as set_data, g as group_outros, Q as destroy_each, x as create_component, y as claim_component, z as mount_component, A as destroy_component, R as src_url_equal } from "../../../chunks/index-501113d1.js";
var BombStatus = /* @__PURE__ */ ((BombStatus2) => {
  BombStatus2[BombStatus2["UNPLANTED"] = 0] = "UNPLANTED";
  BombStatus2[BombStatus2["PLANTING"] = 1] = "PLANTING";
  BombStatus2[BombStatus2["COUNTING_DOWN"] = 2] = "COUNTING_DOWN";
  BombStatus2[BombStatus2["DEFUSING"] = 3] = "DEFUSING";
  BombStatus2[BombStatus2["DEFUSED"] = 4] = "DEFUSED";
  BombStatus2[BombStatus2["EXPLODED"] = 5] = "EXPLODED";
  return BombStatus2;
})(BombStatus || {});
const allWires = {
  blue: {
    color: "seagreen",
    label: "smaragdgroene"
  },
  orange: {
    color: "indigo",
    label: "indigokleurige"
  },
  purple: {
    color: "firebrick",
    label: "vuursteenrode"
  }
};
function generateWires() {
  let wires = [
    ...Object.values(allWires),
    ...Object.values(allWires),
    ...Object.values(allWires),
    ...Object.values(allWires)
  ];
  shuffle(wires);
  return wires;
}
function getRandomWire() {
  const wireInfos = Object.values(allWires);
  return wireInfos[Math.floor(Math.random() * wireInfos.length)];
}
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
const Wire_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let div;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, style: true });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "wire svelte-1l41ls7");
      set_style(
        div,
        "--wire-color",
        /*color*/
        ctx[0]
      );
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (!mounted) {
        dispose = listen(
          div,
          "pointerdown",
          /*pointerdown_handler*/
          ctx[2]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*color*/
      1) {
        set_style(
          div,
          "--wire-color",
          /*color*/
          ctx2[0]
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let color;
  let { wireInfo } = $$props;
  function pointerdown_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$props2) => {
    if ("wireInfo" in $$props2)
      $$invalidate(1, wireInfo = $$props2.wireInfo);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*wireInfo*/
    2) {
      $$invalidate(0, color = (wireInfo == null ? void 0 : wireInfo.color) ?? "transparent");
    }
  };
  return [color, wireInfo, pointerdown_handler];
}
class Wire extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { wireInfo: 1 });
  }
}
const _page_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[23] = list[i];
  child_ctx[25] = i;
  return child_ctx;
}
function create_if_block_5(ctx) {
  let h1;
  let t0;
  let t1;
  let img;
  let img_src_value;
  let t2;
  let p;
  let t3;
  return {
    c() {
      h1 = element("h1");
      t0 = text("DEFUSED");
      t1 = space();
      img = element("img");
      t2 = space();
      p = element("p");
      t3 = text("Nice");
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "DEFUSED");
      h1_nodes.forEach(detach);
      t1 = claim_space(nodes);
      img = claim_element(nodes, "IMG", { src: true, alt: true });
      t2 = claim_space(nodes);
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t3 = claim_text(p_nodes, "Nice");
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWM4YTBiMTkzZDVkYjBjMTM2Y2Y5NTY1NmRmYmRjNWE3MTM5MDBlNyZjdD1n/6rU6mvxEKolQQ/giphy.gif"))
        attr(img, "src", img_src_value);
      attr(img, "alt", "defused");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, img, anchor);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, p, anchor);
      append_hydration(p, t3);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(h1);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(img);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(p);
    }
  };
}
function create_if_block_4(ctx) {
  let h1;
  let t0;
  let t1;
  let img;
  let img_src_value;
  let t2;
  let p;
  let t3;
  return {
    c() {
      h1 = element("h1");
      t0 = text("GEËXPLODEERD");
      t1 = space();
      img = element("img");
      t2 = space();
      p = element("p");
      t3 = text("Ray In Peace");
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "GEËXPLODEERD");
      h1_nodes.forEach(detach);
      t1 = claim_space(nodes);
      img = claim_element(nodes, "IMG", { src: true, alt: true });
      t2 = claim_space(nodes);
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t3 = claim_text(p_nodes, "Ray In Peace");
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = "https://bestanimations.com/Military/Explosions/atomic-mushroom-cloud-nuclear-explosion-4-3.gif"))
        attr(img, "src", img_src_value);
      attr(img, "alt", "explosie");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, img, anchor);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, p, anchor);
      append_hydration(p, t3);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(h1);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(img);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(p);
    }
  };
}
function create_if_block_3(ctx) {
  let t;
  return {
    c() {
      t = text(
        /*countdown*/
        ctx[6]
      );
    },
    l(nodes) {
      t = claim_text(
        nodes,
        /*countdown*/
        ctx[6]
      );
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*countdown*/
      64)
        set_data(
          t,
          /*countdown*/
          ctx2[6]
        );
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_2(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("Activeren...");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Activeren...");
      p_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_if_block_1(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("Klik om de bom te activeren");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Klik om de bom te activeren");
      p_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_if_block(ctx) {
  let div2;
  let div0;
  let t0;
  let t1;
  let h3;
  let t2;
  let t3_value = (
    /*wireToCut*/
    ctx[5].label + ""
  );
  let t3;
  let t4;
  let t5;
  let div1;
  let current;
  let each_value = (
    /*wires*/
    ctx[7]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      t0 = text(
        /*countdown*/
        ctx[6]
      );
      t1 = space();
      h3 = element("h3");
      t2 = text("Klik op alle ");
      t3 = text(t3_value);
      t4 = text(" draden");
      t5 = space();
      div1 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(
        div0_nodes,
        /*countdown*/
        ctx[6]
      );
      div0_nodes.forEach(detach);
      t1 = claim_space(div2_nodes);
      h3 = claim_element(div2_nodes, "H3", { class: true });
      var h3_nodes = children(h3);
      t2 = claim_text(h3_nodes, "Klik op alle ");
      t3 = claim_text(h3_nodes, t3_value);
      t4 = claim_text(h3_nodes, " draden");
      h3_nodes.forEach(detach);
      t5 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div1_nodes);
      }
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "status svelte-c696o8");
      attr(h3, "class", "status svelte-c696o8");
      attr(div1, "class", "wirebox svelte-c696o8");
      attr(div2, "class", "defuser svelte-c696o8");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, t0);
      append_hydration(div2, t1);
      append_hydration(div2, h3);
      append_hydration(h3, t2);
      append_hydration(h3, t3);
      append_hydration(h3, t4);
      append_hydration(div2, t5);
      append_hydration(div2, div1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div1, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (!current || dirty & /*countdown*/
      64)
        set_data(
          t0,
          /*countdown*/
          ctx2[6]
        );
      if ((!current || dirty & /*wireToCut*/
      32) && t3_value !== (t3_value = /*wireToCut*/
      ctx2[5].label + ""))
        set_data(t3, t3_value);
      if (dirty & /*wires, cutWire*/
      640) {
        each_value = /*wires*/
        ctx2[7];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div1, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_each_block(ctx) {
  let wire;
  let current;
  function pointerdown_handler() {
    return (
      /*pointerdown_handler*/
      ctx[12](
        /*i*/
        ctx[25]
      )
    );
  }
  wire = new Wire({
    props: { wireInfo: (
      /*wireInfo*/
      ctx[23]
    ) }
  });
  wire.$on("pointerdown", pointerdown_handler);
  return {
    c() {
      create_component(wire.$$.fragment);
    },
    l(nodes) {
      claim_component(wire.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(wire, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const wire_changes = {};
      if (dirty & /*wires*/
      128)
        wire_changes.wireInfo = /*wireInfo*/
        ctx[23];
      wire.$set(wire_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(wire.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(wire.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(wire, detaching);
    }
  };
}
function create_fragment(ctx) {
  let div0;
  let input0;
  let t0;
  let input1;
  let t1;
  let div3;
  let div1;
  let t2;
  let div2;
  let t3;
  let current;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (
      /*status*/
      ctx2[2] === BombStatus.UNPLANTED
    )
      return create_if_block_1;
    if (
      /*status*/
      ctx2[2] === BombStatus.PLANTING
    )
      return create_if_block_2;
    if (
      /*status*/
      ctx2[2] === BombStatus.COUNTING_DOWN
    )
      return create_if_block_3;
    if (
      /*status*/
      ctx2[2] === BombStatus.EXPLODED
    )
      return create_if_block_4;
    if (
      /*status*/
      ctx2[2] === BombStatus.DEFUSED
    )
      return create_if_block_5;
  }
  let current_block_type = select_block_type(ctx);
  let if_block0 = current_block_type && current_block_type(ctx);
  let if_block1 = (
    /*status*/
    ctx[2] === BombStatus.DEFUSING && create_if_block(ctx)
  );
  return {
    c() {
      div0 = element("div");
      input0 = element("input");
      t0 = space();
      input1 = element("input");
      t1 = space();
      div3 = element("div");
      div1 = element("div");
      t2 = space();
      div2 = element("div");
      if (if_block0)
        if_block0.c();
      t3 = space();
      if (if_block1)
        if_block1.c();
      this.h();
    },
    l(nodes) {
      div0 = claim_element(nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      input0 = claim_element(div0_nodes, "INPUT", { type: true });
      t0 = claim_space(div0_nodes);
      input1 = claim_element(div0_nodes, "INPUT", { type: true });
      div0_nodes.forEach(detach);
      t1 = claim_space(nodes);
      div3 = claim_element(nodes, "DIV", { class: true, style: true });
      var div3_nodes = children(div3);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      children(div1).forEach(detach);
      t2 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      if (if_block0)
        if_block0.l(div2_nodes);
      div2_nodes.forEach(detach);
      t3 = claim_space(div3_nodes);
      if (if_block1)
        if_block1.l(div3_nodes);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(input0, "type", "number");
      attr(input1, "type", "number");
      attr(div0, "class", "settings svelte-c696o8");
      attr(div1, "class", "overlay svelte-c696o8");
      attr(div2, "class", "status svelte-c696o8");
      attr(div3, "class", "bomb svelte-c696o8");
      set_style(
        div3,
        "--plant-time",
        /*PLANT_TIME*/
        ctx[0] + "s"
      );
      set_style(
        div3,
        "--countdown-time",
        /*COUNTDOWN_TIME*/
        ctx[1] + "s"
      );
      toggle_class(
        div3,
        "planting",
        /*status*/
        ctx[2] === BombStatus.PLANTING && /*plantTimer*/
        ctx[3] !== -1
      );
      toggle_class(
        div3,
        "counting-down",
        /*status*/
        ctx[2] === BombStatus.COUNTING_DOWN && /*countdownTimer*/
        ctx[4] !== -1
      );
      toggle_class(
        div3,
        "defusing",
        /*status*/
        ctx[2] === BombStatus.DEFUSING
      );
      toggle_class(
        div3,
        "exploded",
        /*status*/
        ctx[2] === BombStatus.EXPLODED
      );
      toggle_class(
        div3,
        "defused",
        /*status*/
        ctx[2] === BombStatus.DEFUSED
      );
    },
    m(target, anchor) {
      insert_hydration(target, div0, anchor);
      append_hydration(div0, input0);
      set_input_value(
        input0,
        /*PLANT_TIME*/
        ctx[0]
      );
      append_hydration(div0, t0);
      append_hydration(div0, input1);
      set_input_value(
        input1,
        /*COUNTDOWN_TIME*/
        ctx[1]
      );
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div1);
      append_hydration(div3, t2);
      append_hydration(div3, div2);
      if (if_block0)
        if_block0.m(div2, null);
      append_hydration(div3, t3);
      if (if_block1)
        if_block1.m(div3, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            input0,
            "input",
            /*input0_input_handler*/
            ctx[10]
          ),
          listen(
            input1,
            "input",
            /*input1_input_handler*/
            ctx[11]
          ),
          listen(
            div3,
            "pointerdown",
            /*handleClick*/
            ctx[8]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*PLANT_TIME*/
      1 && to_number(input0.value) !== /*PLANT_TIME*/
      ctx2[0]) {
        set_input_value(
          input0,
          /*PLANT_TIME*/
          ctx2[0]
        );
      }
      if (dirty & /*COUNTDOWN_TIME*/
      2 && to_number(input1.value) !== /*COUNTDOWN_TIME*/
      ctx2[1]) {
        set_input_value(
          input1,
          /*COUNTDOWN_TIME*/
          ctx2[1]
        );
      }
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block0) {
        if_block0.p(ctx2, dirty);
      } else {
        if (if_block0)
          if_block0.d(1);
        if_block0 = current_block_type && current_block_type(ctx2);
        if (if_block0) {
          if_block0.c();
          if_block0.m(div2, null);
        }
      }
      if (
        /*status*/
        ctx2[2] === BombStatus.DEFUSING
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*status*/
          4) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div3, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (!current || dirty & /*PLANT_TIME*/
      1) {
        set_style(
          div3,
          "--plant-time",
          /*PLANT_TIME*/
          ctx2[0] + "s"
        );
      }
      if (!current || dirty & /*COUNTDOWN_TIME*/
      2) {
        set_style(
          div3,
          "--countdown-time",
          /*COUNTDOWN_TIME*/
          ctx2[1] + "s"
        );
      }
      if (!current || dirty & /*status, BombStatus, plantTimer*/
      12) {
        toggle_class(
          div3,
          "planting",
          /*status*/
          ctx2[2] === BombStatus.PLANTING && /*plantTimer*/
          ctx2[3] !== -1
        );
      }
      if (!current || dirty & /*status, BombStatus, countdownTimer*/
      20) {
        toggle_class(
          div3,
          "counting-down",
          /*status*/
          ctx2[2] === BombStatus.COUNTING_DOWN && /*countdownTimer*/
          ctx2[4] !== -1
        );
      }
      if (!current || dirty & /*status, BombStatus*/
      4) {
        toggle_class(
          div3,
          "defusing",
          /*status*/
          ctx2[2] === BombStatus.DEFUSING
        );
      }
      if (!current || dirty & /*status, BombStatus*/
      4) {
        toggle_class(
          div3,
          "exploded",
          /*status*/
          ctx2[2] === BombStatus.EXPLODED
        );
      }
      if (!current || dirty & /*status, BombStatus*/
      4) {
        toggle_class(
          div3,
          "defused",
          /*status*/
          ctx2[2] === BombStatus.DEFUSED
        );
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div3);
      if (if_block0) {
        if_block0.d();
      }
      if (if_block1)
        if_block1.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let PLANT_TIME = 5;
  let COUNTDOWN_TIME = 60;
  let status = BombStatus.UNPLANTED;
  let plantTimer = -1;
  let countdownTimer = -1;
  let wireToCut;
  let countdown = COUNTDOWN_TIME;
  let wires = [];
  let lowBeepSound;
  let highBeepSound;
  let explosionSound;
  let defusedSound;
  function initializeSounds() {
    lowBeepSound = new Audio("audio/beepLow.mp3");
    highBeepSound = new Audio("audio/beepHigh.mp3");
    explosionSound = new Audio("audio/explosion.mp3");
    defusedSound = new Audio("audio/defused.mp3");
  }
  function handleClick() {
    switch (status) {
      case BombStatus.UNPLANTED:
        if (plantTimer !== -1)
          break;
        initializeSounds();
        plantBomb();
        break;
      case BombStatus.COUNTING_DOWN:
        {
          defuseBomb();
        }
        break;
    }
  }
  function plantBomb() {
    $$invalidate(2, status = BombStatus.PLANTING);
    $$invalidate(3, plantTimer = setTimeout(
      () => {
        $$invalidate(2, status = BombStatus.COUNTING_DOWN);
        startCountdown();
      },
      PLANT_TIME * 1e3
    ));
  }
  function startCountdown() {
    $$invalidate(4, countdownTimer = setInterval(
      () => {
        $$invalidate(6, countdown -= 1);
        if (countdown < 10) {
          highBeepSound.play();
        } else {
          lowBeepSound.play();
        }
        if (countdown === 0)
          explode();
      },
      1e3
    ));
  }
  function defuseBomb() {
    $$invalidate(2, status = BombStatus.DEFUSING);
    $$invalidate(7, wires = generateWires());
    $$invalidate(5, wireToCut = getRandomWire());
  }
  function explode() {
    clearInterval(countdownTimer);
    $$invalidate(2, status = BombStatus.EXPLODED);
    explosionSound.play();
  }
  function cutWire(index) {
    var _a;
    if (((_a = wires[index]) == null ? void 0 : _a.label) !== wireToCut.label) {
      explode();
    }
    $$invalidate(7, wires[index] = null, wires);
    if (wires.filter((w) => (w == null ? void 0 : w.label) == wireToCut.label).length === 0) {
      defusedBomb();
    }
  }
  function defusedBomb() {
    $$invalidate(2, status = BombStatus.DEFUSED);
    clearInterval(countdownTimer);
    defusedSound.play();
  }
  function input0_input_handler() {
    PLANT_TIME = to_number(this.value);
    $$invalidate(0, PLANT_TIME);
  }
  function input1_input_handler() {
    COUNTDOWN_TIME = to_number(this.value);
    $$invalidate(1, COUNTDOWN_TIME);
  }
  const pointerdown_handler = (i) => cutWire(i);
  return [
    PLANT_TIME,
    COUNTDOWN_TIME,
    status,
    plantTimer,
    countdownTimer,
    wireToCut,
    countdown,
    wires,
    handleClick,
    cutWire,
    input0_input_handler,
    input1_input_handler,
    pointerdown_handler
  ];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};

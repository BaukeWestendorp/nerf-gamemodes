import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, l as claim_element, m as children, h as detach, n as attr, p as set_style, b as insert_hydration, K as listen, C as noop, L as bubble, a as space, c as claim_space, M as toggle_class, F as append_hydration, f as transition_in, t as transition_out, d as check_outros, q as text, r as claim_text, u as set_data, g as group_outros, N as destroy_each, x as create_component, y as claim_component, z as mount_component, A as destroy_component } from "../../../chunks/index-2cc83bec.js";
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
  red: {
    color: "red",
    label: "rode"
  },
  green: {
    color: "green",
    label: "groene"
  },
  blue: {
    color: "blue",
    label: "blauwe"
  }
};
function generateWires(amount) {
  let wires = [];
  for (let i = 0; i < amount; i++) {
    wires.push(getRandomWire());
  }
  return wires;
}
function getRandomWire() {
  const wireInfos = Object.values(allWires);
  return wireInfos[Math.floor(Math.random() * wireInfos.length)];
}
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
      attr(div, "class", "wire svelte-7phohw");
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
  child_ctx[14] = list[i];
  child_ctx[16] = i;
  return child_ctx;
}
function create_if_block_5(ctx) {
  let t;
  return {
    c() {
      t = text("Hahah dat moment dat je bom kapot is gemaakt. Beetje meta wel");
    },
    l(nodes) {
      t = claim_text(nodes, "Hahah dat moment dat je bom kapot is gemaakt. Beetje meta wel");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_4(ctx) {
  let t;
  return {
    c() {
      t = text("Boem jonge allemaal dood haahah amateurs ahhh loooserrrssss");
    },
    l(nodes) {
      t = claim_text(nodes, "Boem jonge allemaal dood haahah amateurs ahhh loooserrrssss");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_3(ctx) {
  let t;
  return {
    c() {
      t = text(
        /*countdown*/
        ctx[4]
      );
    },
    l(nodes) {
      t = claim_text(
        nodes,
        /*countdown*/
        ctx[4]
      );
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*countdown*/
      16)
        set_data(
          t,
          /*countdown*/
          ctx2[4]
        );
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_2(ctx) {
  let t;
  return {
    c() {
      t = text("Activeren...");
    },
    l(nodes) {
      t = claim_text(nodes, "Activeren...");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_1(ctx) {
  let t;
  return {
    c() {
      t = text("Klik om de bom te activeren");
    },
    l(nodes) {
      t = claim_text(nodes, "Klik om de bom te activeren");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block(ctx) {
  let div1;
  let h3;
  let t0;
  let t1_value = (
    /*wireToCut*/
    ctx[3].label + ""
  );
  let t1;
  let t2;
  let t3;
  let div0;
  let current;
  let each_value = (
    /*wires*/
    ctx[5]
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
      div1 = element("div");
      h3 = element("h3");
      t0 = text("Klik op alle ");
      t1 = text(t1_value);
      t2 = text(" draden");
      t3 = space();
      div0 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", {});
      var div1_nodes = children(div1);
      h3 = claim_element(div1_nodes, "H3", {});
      var h3_nodes = children(h3);
      t0 = claim_text(h3_nodes, "Klik op alle ");
      t1 = claim_text(h3_nodes, t1_value);
      t2 = claim_text(h3_nodes, " draden");
      h3_nodes.forEach(detach);
      t3 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div0_nodes);
      }
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "defuser svelte-1lwecnc");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, h3);
      append_hydration(h3, t0);
      append_hydration(h3, t1);
      append_hydration(h3, t2);
      append_hydration(div1, t3);
      append_hydration(div1, div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div0, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & /*wireToCut*/
      8) && t1_value !== (t1_value = /*wireToCut*/
      ctx2[3].label + ""))
        set_data(t1, t1_value);
      if (dirty & /*wires, cutWire*/
      160) {
        each_value = /*wires*/
        ctx2[5];
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
            each_blocks[i].m(div0, null);
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
        detach(div1);
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
      ctx[8](
        /*i*/
        ctx[16]
      )
    );
  }
  wire = new Wire({
    props: { wireInfo: (
      /*wireInfo*/
      ctx[14]
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
      32)
        wire_changes.wireInfo = /*wireInfo*/
        ctx[14];
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
  let div1;
  let div0;
  let t0;
  let h3;
  let t1;
  let current;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (
      /*status*/
      ctx2[0] === BombStatus.UNPLANTED
    )
      return create_if_block_1;
    if (
      /*status*/
      ctx2[0] === BombStatus.PLANTING
    )
      return create_if_block_2;
    if (
      /*status*/
      ctx2[0] === BombStatus.COUNTING_DOWN
    )
      return create_if_block_3;
    if (
      /*status*/
      ctx2[0] === BombStatus.EXPLODED
    )
      return create_if_block_4;
    if (
      /*status*/
      ctx2[0] === BombStatus.DEFUSED
    )
      return create_if_block_5;
  }
  let current_block_type = select_block_type(ctx);
  let if_block0 = current_block_type && current_block_type(ctx);
  let if_block1 = (
    /*status*/
    ctx[0] === BombStatus.DEFUSING && create_if_block(ctx)
  );
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      t0 = space();
      h3 = element("h3");
      if (if_block0)
        if_block0.c();
      t1 = space();
      if (if_block1)
        if_block1.c();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true, style: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      children(div0).forEach(detach);
      t0 = claim_space(div1_nodes);
      h3 = claim_element(div1_nodes, "H3", { class: true });
      var h3_nodes = children(h3);
      if (if_block0)
        if_block0.l(h3_nodes);
      h3_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      if (if_block1)
        if_block1.l(div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "overlay svelte-1lwecnc");
      attr(h3, "class", "status svelte-1lwecnc");
      attr(div1, "class", "bomb svelte-1lwecnc");
      set_style(div1, "--plant-time", PLANT_TIME + "s");
      set_style(div1, "--countdown-time", COUNTDOWN_TIME + "s");
      toggle_class(
        div1,
        "planting",
        /*status*/
        ctx[0] === BombStatus.PLANTING && /*plantTimer*/
        ctx[1] !== -1
      );
      toggle_class(
        div1,
        "counting-down",
        /*status*/
        ctx[0] === BombStatus.COUNTING_DOWN && /*countdownTimer*/
        ctx[2] !== -1
      );
      toggle_class(
        div1,
        "defusing",
        /*status*/
        ctx[0] === BombStatus.DEFUSING
      );
      toggle_class(
        div1,
        "exploded",
        /*status*/
        ctx[0] === BombStatus.EXPLODED
      );
      toggle_class(
        div1,
        "defused",
        /*status*/
        ctx[0] === BombStatus.DEFUSED
      );
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div1, t0);
      append_hydration(div1, h3);
      if (if_block0)
        if_block0.m(h3, null);
      append_hydration(div1, t1);
      if (if_block1)
        if_block1.m(div1, null);
      current = true;
      if (!mounted) {
        dispose = listen(
          div1,
          "pointerdown",
          /*handleClick*/
          ctx[6]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block0) {
        if_block0.p(ctx2, dirty);
      } else {
        if (if_block0)
          if_block0.d(1);
        if_block0 = current_block_type && current_block_type(ctx2);
        if (if_block0) {
          if_block0.c();
          if_block0.m(h3, null);
        }
      }
      if (
        /*status*/
        ctx2[0] === BombStatus.DEFUSING
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*status*/
          1) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div1, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (!current || dirty & /*status, BombStatus, plantTimer*/
      3) {
        toggle_class(
          div1,
          "planting",
          /*status*/
          ctx2[0] === BombStatus.PLANTING && /*plantTimer*/
          ctx2[1] !== -1
        );
      }
      if (!current || dirty & /*status, BombStatus, countdownTimer*/
      5) {
        toggle_class(
          div1,
          "counting-down",
          /*status*/
          ctx2[0] === BombStatus.COUNTING_DOWN && /*countdownTimer*/
          ctx2[2] !== -1
        );
      }
      if (!current || dirty & /*status, BombStatus*/
      1) {
        toggle_class(
          div1,
          "defusing",
          /*status*/
          ctx2[0] === BombStatus.DEFUSING
        );
      }
      if (!current || dirty & /*status, BombStatus*/
      1) {
        toggle_class(
          div1,
          "exploded",
          /*status*/
          ctx2[0] === BombStatus.EXPLODED
        );
      }
      if (!current || dirty & /*status, BombStatus*/
      1) {
        toggle_class(
          div1,
          "defused",
          /*status*/
          ctx2[0] === BombStatus.DEFUSED
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
        detach(div1);
      if (if_block0) {
        if_block0.d();
      }
      if (if_block1)
        if_block1.d();
      mounted = false;
      dispose();
    }
  };
}
const PLANT_TIME = 1;
const COUNTDOWN_TIME = 10;
function instance($$self, $$props, $$invalidate) {
  let status = BombStatus.UNPLANTED;
  let plantTimer = -1;
  let countdownTimer = -1;
  let wireToCut;
  let countdown = COUNTDOWN_TIME;
  let wires = [];
  function handleClick() {
    switch (status) {
      case BombStatus.UNPLANTED:
        if (plantTimer !== -1)
          break;
        plantBomb();
        break;
      case BombStatus.COUNTING_DOWN:
        {
          defuseBomb();
        }
        break;
      case BombStatus.EXPLODED:
        break;
      case BombStatus.DEFUSED:
        break;
    }
  }
  function plantBomb() {
    $$invalidate(0, status = BombStatus.PLANTING);
    $$invalidate(1, plantTimer = setTimeout(
      () => {
        $$invalidate(0, status = BombStatus.COUNTING_DOWN);
        startCountdown();
      },
      PLANT_TIME * 1e3
    ));
  }
  function startCountdown() {
    $$invalidate(2, countdownTimer = setInterval(
      () => {
        $$invalidate(4, countdown -= 1);
        if (countdown === 0)
          explode();
      },
      1e3
    ));
  }
  function defuseBomb() {
    $$invalidate(0, status = BombStatus.DEFUSING);
    clearInterval(countdownTimer);
    $$invalidate(4, countdown = COUNTDOWN_TIME);
    $$invalidate(5, wires = generateWires(6));
    $$invalidate(3, wireToCut = getRandomWire());
  }
  function explode() {
    clearInterval(countdownTimer);
    $$invalidate(0, status = BombStatus.EXPLODED);
  }
  function cutWire(index) {
    var _a;
    if (((_a = wires[index]) == null ? void 0 : _a.label) !== wireToCut.label) {
      explode();
    }
    $$invalidate(5, wires[index] = null, wires);
    if (wires.filter((w) => (w == null ? void 0 : w.label) == wireToCut.label).length === 0) {
      defusedBomb();
    }
  }
  function defusedBomb() {
    $$invalidate(0, status = BombStatus.DEFUSED);
  }
  const pointerdown_handler = (i) => cutWire(i);
  return [
    status,
    plantTimer,
    countdownTimer,
    wireToCut,
    countdown,
    wires,
    handleClick,
    cutWire,
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

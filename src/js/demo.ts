import "../scss/_variables.scss";
import "../scss/_index.scss";

import { SilkCore } from "silk-core";
import { SilkOffcanvas } from "./index.ts";

new SilkCore();

[].forEach.call(document.querySelectorAll('.silk-offcanvas__trigger'), (el) => {
    new SilkOffcanvas(el);
});

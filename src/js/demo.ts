import "../scss/_variables.scss";
import "../scss/_index.scss";

import { SilcCore } from "silc-core";
import { SilcOffcanvas } from "./index.ts";

new SilcCore();

[].forEach.call(document.querySelectorAll('.silc-offcanvas__trigger'), (el) => {
    new SilcOffcanvas(el);
});

import Vue from 'vue'
import { Row, Menu, Icon, Input, Col, Alert, Card, Carousel, Dropdown, Modal, Tabs, Tooltip, Checkbox, Collapse, Button, Anchor, Breadcrumb, message, notification } from 'ant-design-vue'

Vue.prototype.$message = message;
Vue.prototype.$notification = notification;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;
Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$destroyAll = Modal.destroyAll;

Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Alert);
Vue.use(Card);
Vue.use(Carousel);
Vue.use(Dropdown);
Vue.use(Tabs);
Vue.use(Tooltip);
Vue.use(Checkbox);
Vue.use(Collapse);
Vue.use(Button);
Vue.use(Anchor);
Vue.use(Breadcrumb);
Vue.use(Input);


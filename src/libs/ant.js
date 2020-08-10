import Vue from 'vue';
import 'ant-design-vue/dist/antd.css';
/**
 * 重写全局样式，覆盖 antd 的全局样式
 * 需要再 antd.css 后面引入
 */
import {
    Button,
    Select,
    Switch,
    Form,
    FormModel,
    DatePicker,
    Radio,
    Tabs,
    Table,
    Progress,
    Message,
    Upload,
    pagination,
    Checkbox,
    Modal,
    Icon,
    Col,
    Input,
    Dropdown,
    Layout,
    Menu,
    Row,
    Breadcrumb
} from 'ant-design-vue';

Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;
Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$form = Form;
Vue.prototype.$formModel = FormModel;
Vue.prototype.$message = Message;

[Select,Modal, Button, DatePicker, Radio, Progress, Switch,Upload, pagination, Table, Dropdown, Layout, Tabs , Col, Icon, Menu, Row, Form, FormModel, Input, Checkbox,Breadcrumb].forEach(item => Vue.use(item));
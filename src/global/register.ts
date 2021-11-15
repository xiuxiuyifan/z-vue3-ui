import ZForm from "../components/form/ZForm"
import ZFormItem from "../components/form/ZFormItem";
import ZInput from "../components/input/Input";
import ZButton from "../components/Button.vue";



export const registerComponent = (app)=> {
  app.component("z-form", ZForm);
  app.component("z-form-item", ZFormItem);
  app.component("z-input", ZInput);
  app.component("z-button", ZButton);
}
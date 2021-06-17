import { extend } from "vee-validate";
import { required, min, max, alpha } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This field is required",
});

extend("min", {
  ...min,
  message: "Must be greater than 3 characters!",
});
extend("max", {
  ...max,
  message: "Must be less than 20 characters!",
});

import $ from "jquery";
import validate from "jquery-validation";

$('#form').validate({
    rules: {
        firstName: "required",
        tel: "required",
        checkboxRules: "required",
        email: {
          required: true,
          email: true
        }
    },
    messages: {
        firstName: "Введите имя",
        tel: "Введите номер",
        checkboxRules: "required",
        email: {
          required: "Введите email",
          email: "Неверный формат"
        }
      }
        
})
<template>
  <!-- Start Contact Area -->
  <section class="contact-area section-padding" id="contact">
    <div class="container">
      <!-- Start Section Title -->
      <SectionTitle title="Contact me"></SectionTitle>
      <!-- End Section Title -->

      <div class="row">
        <div class="col-lg-3 col-md-4 mb-5 mb-lg-0">
          <div class="contact-left">
            <ContactMeIcon
              v-for="(info, index) in infos"
              v-bind:key="index"
              v-bind:info="info"
            >
            </ContactMeIcon>
          </div>
        </div>
        <div class="col-lg-7 offset-lg-2 col-md-8">
          <form
            id="contact-form"
            class="row contact-form"
            action="#"
            method="POST"
          >
            <Input
              v-for="(input, index) in inputs"
              v-bind:key="index"
              v-bind:input="input"
            ></Input>
            <TextareaVue v-bind:textarea="textarea"></TextareaVue>
            <div class="col-xs-12 col-sm-12">
              <div class="button-field">
                <button type="submit" class="btn radius-btn">
                  Send Message now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- End Contact Area -->
</template>

<script>
import { typeOfIcon } from "../helpers/constants";
import SectionTitle from "./labels/SectionTitle.vue";
import ContactMeIcon from "./images/ContactMeIcon.vue";
import Input from "./forms/Input.vue";
import TextareaVue from './forms/Textarea.vue';

export default {
  name: "ContactArea",
  components: {
    SectionTitle,
    ContactMeIcon,
    Input,
    TextareaVue
  },
  data() {
    return {
      infos: [
        {
          title: "Email",
          info: "devfcph@gmail.com",
          icon: typeOfIcon.EMAIL,
        },
        {
          title: "Phone",
          info: "+52 961 372 34 12",
          icon: typeOfIcon.PHONE,
        },
        {
          title: "Skype",
          info: "devfcph@gmail.com",
          icon: typeOfIcon.SKYPE,
        },
      ],
      inputs: [
        {
          type: "text",
          class: "form-control",
          placeholder: "Enter your name",
          name: "fullname",
          id: "fullname",
          divClass: "col-xs-12 col-sm-6",
        },
        {
          type: "email",
          class: "form-control",
          placeholder: "Enter your email",
          name: "email",
          id: "email",
          divClass: "col-xs-12 col-sm-6",
        },
        {
          type: "text",
          class: "form-control",
          placeholder: "Enter the discussion title",
          name: "subject",
          id: "subject",
          divClass: "col-xs-12 col-sm-12",
        },
      ],
      textarea: {
        class: "form-control",
        placeholder: "Write your message",
        name: "message",
        id: "message",
        div: "col-xs-12 col-sm-12",
      },
    };
  },
};
</script>

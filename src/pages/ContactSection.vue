<script setup>
import { ref } from "vue";
import axios from "axios";
import { Icon } from "@iconify/vue";
import Recaptcha from "@/components/Recaptcha.vue";

const loading = ref(false);
const errorMessage = ref({});
const successMessage = ref(null);
const showSuccessModal = ref(false);
const recaptchaVerified = ref(false);
const recaptchaRef = ref(null);

const onRecaptchaVerified = (token) => {
  if (token) {
    recaptchaVerified.value = true;
    errorMessage.value.recaptcha = "";
  } else {
    recaptchaVerified.value = false;
  }
};

const initialFormData = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  message: "",
};

const formData = ref({ ...initialFormData });

const submitForm = async () => {
  if (!recaptchaVerified.value) {
    errorMessage.value = {
      ...errorMessage.value,
      recaptcha: "Please complete the reCAPTCHA",
    };
    return;
  }
  loading.value = true;
  const url = "https://api-node-my-vouthea.vercel.app/api/send-mail";
  try {
    const response = await axios.post(url, formData.value);
    if (response) {
      errorMessage.value = {};
      formData.value = { ...initialFormData };
      recaptchaVerified.value = false;
      if (recaptchaRef.value) {
        recaptchaRef.value.reset();
      }
      successMessage.value = response.data;
      showSuccessModal.value = true;
    }
  } catch (error) {
    errorMessage.value = error.response?.data || "An error occurred";
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="font-oswald flex flex-col gap-7 mb-10">
    <h2 class="text-center font-oswald text-[30px] text-primary">Contact Us</h2>
    <form
      @submit.prevent="submitForm"
      class="w-full flex flex-col justify-center items-center gap-4"
    >
      <div
        class="w-[55%] max-sm:w-full flex justify-between max-sm:flex-col gap-4"
      >
        <div class="w-full flex flex-col gap-1">
          <label>First Name</label>
          <input
            v-model="formData.firstname"
            type="text"
            placeholder="Please Enter First Name"
            class="input input-bordered input-md w-full"
          />
          <small v-if="errorMessage.firstname" class="text-red-800">
            {{ errorMessage.firstname }}
          </small>
        </div>
        <div class="w-full flex flex-col gap-1">
          <label>Last Name</label>
          <input
            v-model="formData.lastname"
            type="text"
            placeholder="Please Enter First Name"
            class="input input-bordered input-md w-full"
          />
          <small v-if="errorMessage.lastname" class="text-red-800">
            {{ errorMessage.lastname }}
          </small>
        </div>
      </div>
      <div
        class="w-[55%] max-sm:w-full flex justify-between max-sm:flex-col gap-4"
      >
        <div class="w-full flex flex-col gap-1">
          <label>Email</label>
          <input
            v-model="formData.email"
            type="email"
            placeholder="Please Enter Email"
            class="input input-bordered input-md w-full"
          />
          <small v-if="errorMessage.email" class="text-red-800">
            {{ errorMessage.email }}
          </small>
        </div>
        <div class="w-full flex flex-col gap-1">
          <label>Phone</label>
          <input
            v-model="formData.phone"
            type="number"
            placeholder="Please Enter Phone"
            class="input input-bordered input-md w-full"
          />
        </div>
      </div>
      <div
        class="w-[55%] max-sm:w-full flex justify-between max-sm:flex-col gap-4"
      >
        <div class="w-full flex flex-col gap-1">
          <label>Message</label>
          <textarea
            v-model="formData.message"
            placeholder="Writing Something"
            class="textarea textarea-bordered textarea-lg max-w-screen"
          ></textarea>
          <small v-if="errorMessage.message" class="text-red-800">
            {{ errorMessage.message }}
          </small>
        </div>
      </div>

      <div class="w-[55%] max-sm:w-full flex justify-start">
        <Recaptcha ref="recaptchaRef" @verified="onRecaptchaVerified" />
      </div>
      <small v-if="errorMessage.recaptcha" class="text-red-800">
        {{ errorMessage.recaptcha }}
      </small>

      <button
        type="submit"
        class="btn btn-sm w-[55%] max-sm:w-full bg-secondary flex items-center justify-center"
        :disabled="loading || !recaptchaVerified"
      >
        <Icon
          v-if="loading"
          icon="eos-icons:loading"
          class="w-5 h-5 animate-spin mr-2"
        />
        <span v-if="!loading">Send</span>
        <span v-else>Sending...</span>
      </button>
    </form>

    <dialog class="modal" :class="{ 'modal-open': showSuccessModal }">
      <div class="modal-box flex flex-col items-center gap-4">
        <img
          src="/myLove.JPG"
          alt="myLove"
          class="w-32 h-32 object-cover rounded-full"
        />
        <h3 class="font-bold text-lg text-success">Success!</h3>
        <p class="py-4 text-center">{{ successMessage }}</p>
        <div class="modal-action">
          <form method="dialog">
            <button class="btn" @click="showSuccessModal = false">Close</button>
          </form>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button @click="showSuccessModal = false">close</button>
      </form>
    </dialog>
  </div>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>

<script setup>
import {ref} from "vue";
import axios from "axios";
import {Icon} from "@iconify/vue";

const loading = ref(false);
const errorMessage = ref({});
const successMessage = ref(null);


const initialFormData = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  message: ''
};

const formData = ref({...initialFormData});

const submitForm = async () => {
  loading.value = true;
  const url = 'https://api-node-my-vouthea.vercel.app/api/send-mail';
  try {
    const response = await axios.post(url, formData.value);
    if (response) {
      errorMessage.value = {...initialFormData};
      formData.value = {...initialFormData};
      successMessage.value = response.data;
      setTimeout(() => {
        successMessage.value = null;
      }, 3000);
    }
  } catch (error) {
    errorMessage.value = error.response?.data || 'An error occurred';
  } finally {
    loading.value = false;
      }
};


</script>

<template>
  <div class="font-oswald flex flex-col gap-7 mb-10">
    <h2 class="text-center font-oswald text-[30px] text-primary">Contact Us</h2>
    <form @submit.prevent="submitForm"
          class="w-full flex flex-col justify-center items-center gap-4">
      <div class="w-[55%] max-sm:w-full flex justify-between max-sm:flex-col gap-4">
        <div class="w-full flex flex-col gap-1">
          <label>First Name</label>
          <input
              v-model="formData.firstname"
              type="text"
              placeholder="Please Enter First Name"
              class="input input-bordered input-md w-full"/>
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
              class="input input-bordered input-md w-full"/>
          <small v-if="errorMessage.lastname" class="text-red-800">
            {{ errorMessage.lastname }}
          </small>
        </div>
      </div>
      <div class="w-[55%] max-sm:w-full flex justify-between max-sm:flex-col gap-4">
        <div class="w-full flex flex-col gap-1">
          <label>Email</label>
          <input
              v-model="formData.email"
              type="email"
              placeholder="Please Enter Email"
              class="input input-bordered input-md w-full"/>
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
              class="input input-bordered input-md w-full"/>
        </div>
      </div>
      <div class="w-[55%] max-sm:w-full flex justify-between max-sm:flex-col gap-4">
        <div class="w-full flex flex-col gap-1">
          <label>Message</label>
          <textarea
              v-model="formData.message"
              placeholder="Writing Something"
              class="textarea textarea-bordered textarea-lg max-w-screen "></textarea>
          <small v-if="errorMessage.message" class="text-red-800">
            {{ errorMessage.message }}
          </small>
        </div>
      </div>
      <div v-if="successMessage" class="toast rounded-sm">
        <div class="flex flex-row gap-4 alert alert-success rounded-sm">
          <Icon icon="simple-icons:ticktick" class="text-white w-5 h-5"/>
          <span class="text-white">{{ successMessage }}</span>
        </div>
      </div>
      <button type="submit" class="btn btn-sm w-[55%] max-sm:w-full bg-secondary flex items-center justify-center"
              :disabled="loading">
        <Icon v-if="loading" icon="eos-icons:loading" class="w-5 h-5 animate-spin mr-2"/>
        <span v-if="!loading">Send</span>
        <span v-else>Sending...</span>
      </button>
    </form>
  </div>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}
</style>
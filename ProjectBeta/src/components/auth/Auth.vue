<template>
  <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 col-md-10">
        <img
          class="img-fluid"
          src="/src/assets/images/login-image.PNG"
          alt=""
        />
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <form
          @submit.prevent="onSubmit"
          class="p-4 p-md-5 border rounded-3 bg-light"
        >
          <!-- //name -->
          <div v-if="!isUser" class="form-floating mb-3">
            <input
              v-model="$v.name.$model"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': $v.name.$error }"
              id="name"
              placeholder="name"
            />
            <label for="name">First Name</label>
            <small
              v-if="$v.name.$error && !$v.name.required.$initial"
              class="form-text text-danger"
              >This field is required. <br
            /></small>

            <small v-if="!$v.name.minLength" class="form-text text-danger"
              >Your name must be at least 3 characters.<br />
            </small>
            <small
              v-if="$v.name.$error && !$v.name.hasOnlyLetters"
              class="form-text text-danger"
              >You cannot enter numbers in this field.<br />
              Please enter a valid name.
              <br />
            </small>
          </div>
          <!-- //lastName -->
          <div v-if="!isUser" class="form-floating mb-3">
            <input
              v-model="$v.last.$model"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': $v.last.$error }"
              id="last"
              placeholder="last"
            />
            <label for="last">Last Name</label>
            <small
              v-if="$v.last.$error && !$v.last.required.$initial"
              class="form-text text-danger"
              >This field is required. <br
            /></small>

            <small v-if="!$v.last.minLength" class="form-text text-danger"
              >Your last name must be at least 2 characters. <br />
            </small>
            <small
              v-if="$v.last.$error && !$v.last.hasOnlyLetters"
              class="form-text text-danger"
              >You cannot enter numbers in this field.<br />
              Please enter a valid last name.. <br
            /></small>
          </div>
          <!-- //email -->
          <div class="form-floating mb-3">
            <input
              v-model="$v.email.$model"
              type="email"
              class="form-control"
              id="email"
              :class="{ 'is-invalid': $v.email.$error }"
              placeholder="name@example.com"
            />
            <label for="email">E-mail Address</label>
            <small
              v-if="$v.email.$error && !$v.email.required.$initial"
              class="form-text text-danger"
              >This field is required. <br
            /></small>

            <small v-if="!$v.email.email" class="form-text text-danger"
              >Please enter a valid email address.<br />
            </small>
          </div>

          <!-- //birthdate -->
          <div v-if="!isUser" class="form-floating mb-3">
            <input
              v-model="$v.birthdate.$model"
              type="date"
              class="form-control"
              id="birthdate"
              :class="{ 'is-invalid': $v.birthdate.$error }"
              placeholder="name@example.com"
            />
            <label for="birthdate">Birthdate</label>
            <small
              v-if="$v.birthdate.$error && !$v.birthdate.required"
              class="form-text text-danger"
              >This field is required.<br
            /></small>

            <small
              v-if="!$v.birthdate.isValidDate && $v.birthdate.isValid"
              class="form-text text-danger"
            >
              Not suitable for individuals under 18 years of age.<br />
            </small>

            <small v-if="!$v.birthdate.isValid" class="form-text text-danger">
              You cannot enter a value in this field for future dates.<br />
            </small>
          </div>
          <!-- //password -->
          <div class="form-floating mb-3">
            <input
              v-model="$v.password.$model"
              type="password"
              class="form-control"
              :class="{ 'is-invalid': $v.password.$error }"
              id="password"
              placeholder="password"
            />
            <label for="password">Password</label>

            <small
              v-if="$v.password.$error && !$v.password.required.$initial"
              class="form-text text-danger"
              >This field is required.<br />
            </small>
            <small v-if="!$v.password.minLength" class="form-text text-danger"
              >Your password must contain at least 5 characters. <br />
            </small>
            <small v-if="!$v.password.maxLength" class="form-text text-danger"
              >Your password cannot exceed 10 characters. <br />
            </small>
            <small
              v-if="$v.password.$error && !$v.password.hasOneCharacter"
              class="form-text text-danger"
              >Please use at least one letter. <br />
            </small>
            <small
              v-if="$v.password.$error && !$v.password.hasOneNumber"
              class="form-text text-danger"
              >Please use at least one number. <br />
            </small>
          </div>

          <!-- //re-password -->
          <div v-if="!isUser && this.password" class="form-floating mb-3">
            <input
              v-model="$v.repassword.$model"
              type="password"
              :class="{ 'is-invalid': $v.repassword.$error }"
              class="form-control"
              id="rePassword2"
              placeholder="re-password"
            />
            <label for="rePassword">Re-Password</label>

            <small
              v-if="$v.repassword.$error && !$v.repassword.required.$initial"
              class="form-text text-danger"
              >This field is required.<br
            /></small>

            <small v-if="!$v.repassword.minLength" class="form-text text-danger"
              >Your password must contain at least 5 characters. <br />
            </small>
            <small v-if="!$v.repassword.maxLength" class="form-text text-danger"
              >Your password cannot exceed 10 characters.<br />
            </small>
            <small
              v-if="$v.repassword.$error && !$v.repassword.sameAs"
              class="form-text text-danger"
              >Your password does not match the confirmation. <br />
            </small>
          </div>

          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>

          <div class="button-container d-flex  flex-column align-items-center">
            <button
              type="submit"
              :class="{ 'btn-warning': isUser, 'btn-custom': !isUser }"
              class=" w-100 btn btn-lg mb-2"
              :disabled="
                isUser ? $v.email.$invalid || $v.password.$invalid : $v.$invalid
              "
            >
              {{ isUser ? "Login" : "Sign up" }}
            </button>

            <a
              class="text-secondary fw-bold text-decoration-none"
              @click="toggle"
              style="cursor: pointer;"
            >
              <span v-if="isUser">
                Sign up
              </span>
              <span v-else>
                Login
              </span>
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs
} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      name: null,
      last: null,
      birthdate: null,
      email: null,
      password: "",
      repassword: "",
      isUser: false,
      form: []
    };
  },
  methods: {
    toggle() {
      this.isUser = !this.isUser;
      console.log(this.isUser);
    },
    onSubmit() {
      if (!this.isUser) {
        this.form = {
          email: this.email,
          name: this.name,
          last: this.last,
          birthdate: this.birthdate,
          password: this.password
        };
      } else {
        this.form = {
          email: this.email,
          password: this.password
        };
      }

      this.$store.dispatch("login", { ...this.form, isUser: this.isUser })
      .then(res => {
       this.$router.push("/");
      })
    }
  },
  validations: {
    email: {
      required,
      email
    },
    name: {
      required,
      minLength: minLength(3),
      hasOnlyLetters(value) {
        return /^[a-zA-Z]*$/.test(value);
      }
    },
    last: {
      required,
      minLength: minLength(2),
      hasOnlyLetters(value) {
        return /^[a-zA-Z]*$/.test(value);
      }
    },
    birthdate: {
      //custom

      required,
      isValidDate: value => {
        const dateString = value;
        const year = new Date(dateString).getFullYear();
        // console.log(year); // 2023
        const age = new Date().getFullYear() - year;
        // console.log(age); //age
        return age >= 18;
      },

      isValid: (value = this.birthdate) => {
        const dateString = value;
        const year = new Date(dateString).getFullYear();
        // console.log(year); // 2023
        const age = new Date().getFullYear() - year;
        // console.log(age); //age
        return age <= 0 ? false : true;
      }
    },
    password: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(10),
      hasOneCharacter(value) {
        return value && value.length > 0 && /[a-zA-Z]/.test(value);
      },
      hasOneNumber(value) {
        return value && value.length > 0 && /\d/.test(value);
      }
    },
    repassword: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(10),
      sameAs: sameAs("password")
    }
  }
};
</script>
<style>
.btn-custom {
  background-color: #541fc4 !important;
  border-color: #541fc4 !important;
  color: white !important;
}
.btn-custom:hover {
  background-color: #541fc4;
  border-color: #541fc4;
  color: white;
  transform: scale(1.1);
}
</style>

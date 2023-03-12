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
        <!-- login -->
        <!-- //sing up -->
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
              id="floatingInputName"
              placeholder=" Name"
            />
            <small
              v-if="$v.name.$error && !$v.name.required.$initial"
              class="form-text text-danger"
              >Bu alan zorunludur... <br
            /></small>

            <small v-if="!$v.name.minLength" class="form-text text-danger"
              >En az (3) karakter olmalıdır <br />
            </small>
            <small
              v-if="$v.name.$error && !$v.name.hasOnlyLetters"
              class="form-text text-danger"
              >İsminiz sayı içeremez.<br />Lütfen geçerli bir isim giriniz..
              <br
            /></small>

            <label for="floatingInputName">First Name</label>
          </div>
          <!-- //lastName -->
          <div v-if="!isUser" class="form-floating mb-3">
            <input
              v-model="$v.last.$model"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': $v.last.$error }"
              id="floatingInputLast"
              placeholder="last Name"
            />
            <label for="floatingInputLast">Last Name</label>
            <small
              v-if="$v.last.$error && !$v.last.required.$initial"
              class="form-text text-danger"
              >Bu alan zorunludur... <br
            /></small>

            <small v-if="!$v.last.minLength" class="form-text text-danger"
              >En az (2) karakter olmalıdır <br />
            </small>
            <small
              v-if="$v.last.$error && !$v.last.hasOnlyLetters"
              class="form-text text-danger"
              >Soyad sayı içeremez.<br />Lütfen geçerli bir soyad giriniz.. <br
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
              >Bu alan zorunludur... <br
            /></small>

            <small v-if="!$v.email.email" class="form-text text-danger"
              >Lütfen geçerli bir e-posta adresi giriniz...<br />
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
              >Bu alan zorunludur... <br
            /></small>

            <!-- <small
              v-if="!$v.birthdate.minLength || !$v.birthdate.maxLength"
              class="form-text text-danger"
              >yyyy formatında 4 haneli bir rakam giriniz <br
            /></small> -->

            <small
              v-if="!$v.birthdate.isValidDate && $v.birthdate.isValid"
              class="form-text text-danger"
            >
              18 yaşından küçükler giremez..<br />
            </small>
            <!-- <small v-if="!$v.birthdate.numeric" class="form-text text-danger">
              Bu alana karakter girilmez sadece: sayı <br />
            </small> -->

            <small v-if="!$v.birthdate.isValid" class="form-text text-danger">
              Gelecek tarihde bir değer giremezsiniz ..<br />
            </small>

          </div>
          <!-- //password -->
          <div class="form-floating mb-3">
            <input
              v-model="$v.password.$model"
              type="password"
              class="form-control"
              :class="{ 'is-invalid': $v.password.$error }"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>

            <small
              v-if="$v.password.$error && !$v.password.required.$initial"
              class="form-text text-danger"
              >Bu alan zorunludur...<br />
            </small>
            <small v-if="!$v.password.minLength" class="form-text text-danger"
              >Lütfen min(5) karakter giriniz <br />
            </small>
            <small v-if="!$v.password.maxLength" class="form-text text-danger"
              >Lütfen max(10) karakter giriniz <br />
            </small>
            <small
              v-if="$v.password.$error && !$v.password.hasOneCharacter"
              class="form-text text-danger"
              >Lütfenen az bir karakter giriniz <br />
            </small>
            <small
              v-if="$v.password.$error && !$v.password.hasOneNumber"
              class="form-text text-danger"
              >Lütfenen az bir rakam giriniz <br />
            </small>
          </div>

          <!-- //re-password -->
          <div v-if="!isUser && this.password" class="form-floating mb-3">
            <input
              v-model="$v.repassword.$model"
              type="password"
              :class="{ 'is-invalid': $v.repassword.$error }"
              class="form-control"
              id="floatingRePassword2"
              placeholder="re-password"
            />
            <label for="floatingRePassword">Re-Password</label>

            <small
              v-if="$v.repassword.$error && !$v.repassword.required.$initial"
              class="form-text text-danger"
              >Bu alan zorunludur... <br
            /></small>

            <small v-if="!$v.repassword.minLength" class="form-text text-danger"
              >Lütfen min(5) karakter giriniz <br />
            </small>
            <small v-if="!$v.repassword.maxLength" class="form-text text-danger"
              >Lütfen max(10) karakter giriniz<br />
            </small>
            <small
              v-if="$v.repassword.$error && !$v.repassword.sameAs"
              class="form-text text-danger"
              >Parola tekrarınız uyuş muyor <br />
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
              :disabled="$v.$invalid"
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
    <!-- {{ $v.birthdate }} -->
  </div>
</template>

<script>
import {
  required,
  email,
  numeric,
  minLength,
  maxLength,
  sameAs,
  between,
  regex,
  withParams
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

      dateOfBirth: null
    };
  },
  methods: {
    toggle() {
      this.isUser = !this.isUser;
      console.log(this.isUser);
    },
    onSubmit() {
      let form = {
        email: this.email,
        name: this.name,
        last: this.last,
        age: this.age,
        password: this.password,
        repassword: this.repassword,
        isUser: this.isUser
      };
      console.log(form);
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
         isValidDate: (value) => {
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
      //  regex: regex(/^(?=.*[a-zA-Z])(?=.*\d).+$/)
    },
    repassword: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(10),
      sameAs: sameAs("password")
    },


  }
};
</script>
<style>
.btn-custom {
  background-color: #9b30ff !important;
  border-color: #9b30ff !important;
  color: white !important;
}
.btn-custom:hover {
  background-color: #9b30ff;
  border-color: #9b30ff;
  color: white;
  transform: scale(1.1);
}
</style>

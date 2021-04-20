<template>
  <div>
    <div class="showFeedback">
      <div class="mt-16 ml-20 font-bold text-2xl text-gray-700">Feedback</div>
      <div class="lists flex flex-wrap space-x-5 justify-center">
        <div
          class="list w-1/5 p-8 shadow-md rounded-lg bg-white text-gray-800 flex flex-col mt-10"
          v-for="result in feedbackResults"
          :key="result.id"
        >
          <div class="content font-semibold">
            {{ result.fname }} {{ result.lname }}

            <p class="text-3xl mt-2"><span>"</span> {{ result.msg }} <span>"</span></p>
            <p class="mt-5 text-gray-400">- {{ result.fname }} -</p>
          </div>
          <div class="isEdit" v-if="isEdit">
            <form @submit.prevent="editSubmit(result)">
              <div class="field textarea">
                <textarea
                  maxlength="50"
                  v-model="newMsg"
                  cols="20"
                  rows="5"
                  placeholder="message"
                  required
                  class="bg-gray-100 rounded px-4 py-2 mb-4 shadow-md"
                ></textarea>
              </div>
              <button
                    type="submit"
                    class="rounded-lg bg-pink-500 text-white hover:bg-pink-800 p-2 shadow-md"
                  >
                    confirm edit
                  </button>
            </form>
          </div>
          <div class=" mt-16">
                <button
                  class=" rounded-lg bg-pink-500 text-white hover:bg-pink-800 p-2 shadow-md"
                  @click="editSurvey"
                  v-if="isEdit===false"
                >
                  Edit
                </button>
              <button
                @click="deleteFeedback(result.id)"
                v-if="isEdit===false"
                class="rounded-lg float-right p-2 px-2.5 bg-pink-500 text-white hover:bg-pink-800"
                >Delete</button
              >
                  
              </div>
        </div>
      </div>
    </div>

    <form @submit.prevent="addFeedback">
      <div
        class="container w-2/5 p-8 mx-auto mt-20 shadow-md rounded-lg bg-white"
      >
        <span class="font-bold text-xl text-gray-700"> Send a feedback! </span>
        <div class="grid gap-4 mt-5">
          <div class="flex flex-col float-right">
            <label for="firstname" class="text-sm leading-7 text-gray-600"
              >First Name</label
            >
            <input
              type="text"
              id="firstname"
              v-model="fname"
              name="firstname"
              class="bg-gray-100 rounded px-4 py-2 mb-4"
            />
          </div>
          <div class="flex flex-col">
            <label for="lastname" class="text-sm leading-7 text-gray-600"
              >Last Name</label
            >
            <input
              type="text"
              id="lastname"
              v-model="lname"
              name="lastname"
              class="bg-gray-100 rounded px-4 py-2 mb-4"
            />
          </div>
          <div class="flex flex-col">
            <label for="email" class="text-sm leading-7 text-gray-600"
              >Email</label
            >
            <input
              type="text"
              id="email"
              v-model="email"
              name="email"
              class="bg-gray-100 rounded px-4 py-2 mb-4"
            />
          </div>
          <div class="field flex-col textarea">
            <label for="message" class="text-sm leading-7 text-gray-600"
              >Message</label
            ><br />
            <textarea
              maxlength="200"
              v-model="msg"
              cols="54"
              rows="10"
              placeholder="Text here"
              required
              class="bg-gray-100 rounded px-4 py-2 mb-4"
            ></textarea>
          </div>
          <div>
            <input
              type="submit"
              value="Submit"
              class="px-8 py-2 text-white bg-pink-500 rounded-lg hover:bg-pink-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      feedbackResults: [],
      url: "http://localhost:3000/feedback",
      isEdit: false,
      newMsg: "",
      fname: "",
      lname: "",
      email: "",
      msg: "",
    };
  },
  methods: {
    async fetchFeedbackResult() {
      const res = await fetch(this.url);
      const data = await res.json();
      return data;
    },
    editSurvey() {
      this.isEdit = true;
    },
    async deleteFeedback(id) {
      if (confirm(`Are you sure to delete ?`)) {
        const res = await fetch(`${this.url}/${id}`, {
          method: "DELETE",
        });
        res.status === 200
          ? (this.feedbackResults = this.feedbackResults.filter(
              (feedback) => feedback.id !== id
            ))
          : alert("Error to delete feedback");
      }
    },
    async editSubmit(editingData) {
      const res = await fetch(`${this.url}/${editingData.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          fname: editingData.fname,
          lname: editingData.lname,
          email: editingData.email,
          msg: this.newMsg,
        }),
      });
      const data = await res.json();
      this.feedbackResults = this.feedbackResults.map((feedback) =>
        feedback.id === data.id
          ? {
              ...feedback,
              fname: data.fname,
              lname: data.lname,
              email: data.email,
              msg: data.msg,
            }
          : feedback
      );
      this.newMsg = "";
      this.isEdit = false;
    },
    async addFeedback() {
      const newFeedback = {
        fname: this.fname,
        lname: this.lname,
        email: this.email,
        msg: this.msg,
      };
      const res = await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          fname: newFeedback.fname,
          lname: newFeedback.lname,
          email: newFeedback.email,
          msg: newFeedback.msg,
        }),
      });
      const data = await res.json();
      this.feedbackResults = [...this.feedbackResults, data];
      this.fname = "";
      this.lname = "";
      this.email = "";
      this.msg = "";
    },
  },
  async created() {
    this.feedbackResults = await this.fetchFeedbackResult();
  },
};
</script>
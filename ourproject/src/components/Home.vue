<template>
  <div>
    <router-link to="/" class="tit">홈</router-link>
    <div class="member_btn">
      <router-link to="/Login" class="login_btn member_box" title="로그인">로그인</router-link>
      <router-link to="/Agreement" class="join_btn member_box" title="회원가입">회원가입</router-link>
      <router-link to="/Board" class="board_btn member_box" title="게시판">게시판</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
  }
}
</script>

<style scoped>

.tit {
  text-decoration: none;
  color: inherit;
  font-size: 30px;
  font-weight: bold;
}
.member_btn {
  margin-top: 15px;
}
.member_box {
  box-sizing: border-box;
  border: 1px solid black;
  width: 230px;
  height: 50px;
  display: block;
  margin: 0 auto;
  cursor: pointer;
  text-decoration: none;
  padding-top: 12px;
}
.member_box:visited {
  color: inherit;
}
.login_btn {
  margin-bottom: 15px;
}
.join_btn {
  margin-bottom: 15px;
}
</style>
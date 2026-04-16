module.exports = {
  run: [{
    method: "shell.run",
    params: { message: "git clone https://github.com/seeda0114/my-project.git app" }
  }, {
    method: "notify",
    params: { html: "감독님, 프로젝트 다운로드가 완료되었습니다!" }
  }]
}

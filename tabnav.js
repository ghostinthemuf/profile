const tabNav = (domain) => {
  document.getElementById(domain).classList.add("content-active");
};

const tabs = document.querySelectorAll(".tab");

const contents = document.querySelectorAll(".content");

tabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    tabs.forEach((tab) => {
      tab.classList.remove("tab-active");
    });
    contents.forEach((content) => {
      content.classList.remove("content-active");
    });
    event.currentTarget.classList.add("tab-active");
    tabNav(event.currentTarget.dataset.domain);
  });
});

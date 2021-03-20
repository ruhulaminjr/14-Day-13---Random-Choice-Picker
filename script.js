const tagsEl = document.querySelector("#tags");

const textarea = document.querySelector("#textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  if (e.key === 'Enter'){
      setTimeout(() => {
          e.target.value = '';
      }, 10);
      randomSelect();
  }
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  //   console.log(tags);
  tagsEl.innerHTML = "";

  tags.forEach(tag => {
      const tagSpan = document.createElement('span');
      tagSpan.classList.add('tag');
      tagSpan.innerText = tag;

      tagsEl.appendChild(tagSpan);
  });
}

function randomSelect(){
    times = 30 * 100;
    const interval = setInterval(() => {
        const randomTag = pickRandom();
        // console.log(randomTag);
        highlight(randomTag);
        setTimeout(() => {
            unhighlight(randomTag);
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const randomtag = pickRandom();
            highlight(randomtag);
        }, 100);
    }, times);
}

function pickRandom(){
    const tags = document.querySelectorAll('.tag');
    random = Math.floor(Math.random() * tags.length);
    console.log(random);

    return tags[random];
}

function highlight(tag){
    tag.classList.add('highlight');
}
function unhighlight(tag){
    tag.classList.remove('highlight');
}

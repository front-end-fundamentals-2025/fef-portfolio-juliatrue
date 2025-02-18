class ChangeText {
  constructor(project, image) {
    const caption = project.innerText;

    image.addEventListener("mouseover", function () {
      project.innerText = "Click for Details";
    });
    image.addEventListener("mouseout", function () {
      project.innerText = caption;
    });
  }
}

const street = new ChangeText(
  document.getElementById("caption-street"),
  document.getElementById("project-street")
);

const logo = new ChangeText(
  document.getElementById("caption-logo"),
  document.getElementById("project-logo")
);

const photo = new ChangeText(
  document.getElementById("caption-photo"),
  document.getElementById("project-photo")
);

const photoTwo = new ChangeText(
  document.getElementById("caption-photo-two"),
  document.getElementById("project-photo-two")
);

const photoThree = new ChangeText(
  document.getElementById("caption-photo-three"),
  document.getElementById("project-photo-three")
);

const photoFour = new ChangeText(
  document.getElementById("caption-photo-four"),
  document.getElementById("project-photo-four")
);

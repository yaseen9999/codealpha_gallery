const images = [
  "https://picsum.photos/420/360?random=1",
  "https://picsum.photos/420/360?random=2",
  "https://picsum.photos/420/360?random=3",
  "https://picsum.photos/420/360?random=4",
  "https://picsum.photos/420/360?random=5",
  "https://picsum.photos/420/360?random=6",
  "https://picsum.photos/420/360?random=7",
  "https://picsum.photos/420/360?random=8",
  "https://picsum.photos/420/360?random=9",
  "https://picsum.photos/420/360?random=10",
  "https://picsum.photos/420/360?random=11",
  "https://picsum.photos/420/360?random=12",
  "https://picsum.photos/420/360?random=13",
  "https://picsum.photos/420/360?random=14",
];
//save current index of image to be display on preview in this global variable
let currentImageIndex = 0;
//this func change style of model class from display none to show
function openModal(index) {
  currentImageIndex = index;
  document.getElementById("modal").style.display = "flex";
  updateModalImage();
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

//this function update src  for image attribute base on current Index
function updateModalImage() {
  const modalImage = document.getElementById("modal-image");
  modalImage.src = images[currentImageIndex];
}

function prevImage() {
  //   the condition here checks if currentImageIndex is 0 means if its first element then display last element of array
  //  then show last element of a array
  //images.length -1 gives position of last element in array -1 because array start from 0 index
  currentImageIndex =
    currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
  updateModalImage();
}

function nextImage() {
  //   the condition here checks if currentImageIndex is last element in array then it display first element of array
  //images.length -1 gives position of last element in array -1 because array start from 0 index
  currentImageIndex =
    currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
  updateModalImage();
}

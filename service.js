const serviceHeaders = document.querySelectorAll('.service h3');
const serviceDetails = document.querySelectorAll('.service-details');

serviceHeaders.forEach((header, index) => {
  header.addEventListener('click', () => {
    // Toggle the visibility of the clicked service detail
    serviceDetails[index].classList.toggle('show');
    header.classList.toggle('active');
  });
});
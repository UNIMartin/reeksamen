// JavaScript Document

const video = document.getElementById('video');

    function pauseVideo(event) {
        if (event.currentTime > video.duration - 0.6) {
            video.pause();
        }
    }

const expandAbout = document.getElementById("about-button");
const expandedAbout = document.getElementById("about-content");

expandAbout.addEventListener("click", () => {
	expandedAbout.classList.toggle("expanded");
});

const closeAbout = document.getElementById("close-about");
const closedAbout = document.getElementById("about-content");

closeAbout.addEventListener("click", () => {
	closedAbout.classList.remove("expanded");
});


const expandOnlyfans = document.getElementById("onlyfans-button");
const expandedOnlyfans = document.getElementById("onlyfans-content");

expandOnlyfans.addEventListener("click", () => {
	expandedOnlyfans.classList.toggle("expanded");
});

const closeOnlyfans = document.getElementById("close-onlyfans");
const closedOnlyfans = document.getElementById("onlyfans-content");

closeOnlyfans.addEventListener("click", () => {
	closedOnlyfans.classList.remove("expanded");
});


const expandAudiobooks = document.getElementById("audiobooks-button");
const expandedAudiobooks = document.getElementById("audiobooks-content");

expandAudiobooks.addEventListener("click", () => {
	expandedAudiobooks.classList.toggle("expanded");
});

const closeAudiobooks = document.getElementById("close-audiobooks");
const closedAudiobooks = document.getElementById("audiobooks-content");

closeAudiobooks.addEventListener("click", () => {
	closedAudiobooks.classList.remove("expanded");
});


const expandMerch = document.getElementById("merch-button");
const expandedMerch = document.getElementById("merch-content");

expandMerch.addEventListener("click", () => {
	expandedMerch.classList.toggle("expanded");
});

const closeMerch = document.getElementById("close-merch");
const closedMerch = document.getElementById("merch-content");

closeMerch.addEventListener("click", () => {
	closedMerch.classList.remove("expanded");
});


const expandWishlist = document.getElementById("wishlist-button");
const expandedWishlist = document.getElementById("wishlist-content");

expandWishlist.addEventListener("click", () => {
	expandedWishlist.classList.toggle("expanded");
});

const closeWishlist = document.getElementById("close-wishlist");
const closedWishlist = document.getElementById("wishlist-content");

closeWishlist.addEventListener("click", () => {
	closedWishlist.classList.remove("expanded");
});


const expandDonations = document.getElementById("donations-button");
const expandedDonations = document.getElementById("donations-content");

expandDonations.addEventListener("click", () => {
	expandedDonations.classList.toggle("expanded");
});

const closeDonations = document.getElementById("close-donations");
const closedDonations = document.getElementById("donations-content");

closeDonations.addEventListener("click", () => {
	closedDonations.classList.remove("expanded");
});

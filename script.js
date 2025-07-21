function downloadConfig() {
  const status = document.getElementById("status");
  status.textContent = "در حال دریافت فایل...";
  const today = new Date().toISOString().slice(0, 10); // yyyy-mm-dd
  const fileUrl = `https://your-username.github.io/woo-config-v2/configs/configs-${today}.txt`;

  fetch(fileUrl)
    .then(response => {
      if (!response.ok) throw new Error("فایل پیدا نشد");
      return response.blob();
    })
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "configs.txt";
      a.click();
      status.textContent = "✅ دانلود انجام شد.";
    })
    .catch(() => {
      status.textContent = "❌ فایل امروز هنوز منتشر نشده است.";
    });
}


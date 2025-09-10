// ページが読み込まれたら実行
document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector(".calendar table tbody");

  // 今回は2025年9月を表示する
  const year = 2025;
  const month = 8; // 9月（0始まりなので8）

  // 月の最初の曜日（0=日曜, 1=月曜, ...）
  const firstDay = new Date(year, month, 1).getDay();

  // 月の最終日（例: 9月は30日）
  const lastDate = new Date(year, month + 1, 0).getDate();

  let row = document.createElement("tr");

  // 1日が始まる前の空セルを追加
  for (let i = 0; i < firstDay; i++) {
    row.appendChild(document.createElement("td"));
  }

  // 日付セルを作成
  for (let d = 1; d <= lastDate; d++) {
    const td = document.createElement("td");

    // 日付番号を入れる
    td.innerHTML = `<div class="date">${d}</div>`;

    // データ属性に日付を保存しておく（後で使える）
    td.dataset.date = `${year}-${month + 1}-${d}`;

    // サンプルでシフトを入れてみる
    if (d === 1) {
      td.innerHTML += `<div class="shift">Alice 10-14</div>`;
      td.innerHTML += `<div class="shift">Bob 14-18</div>`;
    }
    if (d === 2) {
      td.innerHTML += `<div class="shift">Charlie 9-17</div>`;
    }
    if (d === 3) {
      td.innerHTML += `<div class="shift">Alice 10-15</div>`;
      td.innerHTML += `<div class="shift">David 15-20</div>`;
    }

    row.appendChild(td);

    // 土曜日まで来たら次の行にする
    if ((firstDay + d) % 7 === 0) {
      tbody.appendChild(row);
      row = document.createElement("tr");
    }
  }

  // 最後の行を追加
  tbody.appendChild(row);
});

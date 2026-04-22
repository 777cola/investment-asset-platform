// 数据管理页面（导入、导出、重置）

export function renderDataManagement(state, t) {
  return `
  <div class="content-inner stack fade-in" style="max-width:800px;margin:0 auto">
    <div class="section-header">
      <div>
        <div class="section-title">${t("dataManagement")}</div>
        <div class="section-subtitle">${t("dataManagementDesc")}</div>
      </div>
      <button class="btn-ghost btn-sm" data-action="admin-goto" data-page="menu">${t("backToMenu")}</button>
    </div>

    <!-- 导出 -->
    <div class="card fade-in-1">
      <div class="card-header"><div><div class="card-title">${t("exportData")}</div><div class="card-subtitle">${t("exportDataDesc")}</div></div></div>
      <div class="card-body">
        <button class="btn-primary" data-action="export-data">${t("exportJSON")}</button>
      </div>
    </div>

    <!-- 导入 -->
    <div class="card fade-in-2">
      <div class="card-header"><div><div class="card-title">${t("importData")}</div><div class="card-subtitle">${t("importDataDesc")}</div></div></div>
      <div class="card-body">
        <div class="toolbar">
          <button class="btn-secondary" data-action="import-data">${t("importJSON")}</button>
          <button class="btn-ghost" data-action="import-excel">${t("importExcel")}</button>
        </div>
        <div class="helper-note" style="margin-top:14px">
          ${t("excelFormat")}: <code>${t("name")}、${t("password")}</code>
        </div>
      </div>
    </div>

    <!-- 说明 -->
    <div class="card card-alt fade-in-3">
      <div class="card-header"><div><div class="card-title">${t("dataStructureNote")}</div></div></div>
      <div class="card-body">
        <div class="helper-note">
          ${t("dataStructureDesc")}
        </div>
      </div>
    </div>
  </div>`;
}

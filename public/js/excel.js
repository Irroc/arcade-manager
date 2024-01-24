document.getElementById("export").onclick = function () {
    const fileName = $("#exportFileName").val();
    if (fileName.substr(-5,5) !== '.xlsx') {
        fileName += '.xlsx';
    }
    const json = JSON.stringify(workbook.toJSON());
    workbook.export(function (blob) {
        saveAs(blob, fileName);
    }, function (e) {
        console.log(e);
    }, {
        fileType: GC.Spread.Sheets.FileType.excel
    });
}
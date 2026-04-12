<?php
define("NO_KEEP_STATISTIC", true);
define("NOT_CHECK_PERMISSIONS",true);
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");

$postData = $_POST;

CEvent::Send(
    "FRANCHISE", 
    SITE_ID,
    $postData
);

echo json_encode(['status' => 'success', 'message' => 'Заявка отправлена']);
?>
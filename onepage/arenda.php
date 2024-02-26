<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
</head>
    
<?php 
echo '<pre>';
//var_dump($_POST);
echo '</pre>';

$sanuzel[] = $_POST['sanuzel_vannaya'];
$sanuzel[] = $_POST['sanuzel_dush'];
$sanuzel[] = $_POST['sanuzel_bide'];
$sanuzel[] = $_POST['sanuzel_dushgigien'];
$sanuzel[] = $_POST['sanuzel_polotsuhit'];

$kuhnya[] = $_POST['kuhnya_plitagaz'];
$kuhnya[] = $_POST['kuhnya_plitaelek'];
$kuhnya[] = $_POST['kuhnya_microvoln'];
$kuhnya[] = $_POST['kuhnya_duhovka'];
$kuhnya[] = $_POST['kuhnya_vityazh'];
$kuhnya[] = $_POST['kuhnya_cooler'];
$kuhnya[] = $_POST['kuhnya_waterfiltr'];
$kuhnya[] = $_POST['kuhnya_izmelvrak'];
$kuhnya[] = $_POST['kuhnya_kofevar'];
$kuhnya[] = $_POST['kuhnya_kofemol'];
$kuhnya[] = $_POST['kuhnya_sokovizh'];
$kuhnya[] = $_POST['kuhnya_grill'];
$kuhnya[] = $_POST['kuhnya_doskarzdel'];
$kuhnya[] = $_POST['kuhnya_prinadlkuhon'];

foreach($sanuzel as $key) {
    echo $key.'<br>';
}

foreach($kuhnya as $key) {
    echo $key.'<br>';
}

$data['sanuzel'] = serialize($sanuzel);
$data['kuhnya'] = serialize($kuhnya);

echo '<pre>';
var_dump($data);
echo '</pre>';
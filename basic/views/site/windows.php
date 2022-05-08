<?php

/** @var yii\web\View $this */

use yii\helpers\Html;

$this->title = 'Window';
$this->registerJsFile('@web/js/windows.js', ['depends' => 'yii\web\YiiAsset', 'type' => 'module']);
?>

<div class="row">
    <div class="col-10">
      <input type="range" class="form-range w-100" id="slider" min="0" max="10" step="1" value="5">
    </div>
    <div class="col-2">
      <input type="color" class="form-control form-control-color mt-0" id="colorPicker" value="#5F8575" title="Choose board color">
    </div>
  </div>


<div id="svg-container"></div>

<?php

/** @var yii\web\View $this */

use yii\helpers\Html;

//$this->title = $tag.' game';
$this->title = 'with robot game';
$this->registerJsFile('@web/js/robot.js', ['depends' => 'yii\web\YiiAsset', 'type' => 'module']);
?>

<div class="row">

  <div class="col-sm" id="menuList">
    <h1 style="text-transform:uppercase">with robot game</h1>
    <button id="restart_button" type="button" class="btn btn-success">Restart</button>
  </div>

  <div class="col-sm" id="mehen_board_container"></div>

</div>

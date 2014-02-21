<?php

if(isset($_GET['get'])){ echo '[{"'.$_GET['get'].'"}]';}else{
$request_body = file_get_contents('php://input');
echo $request_body;
}
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


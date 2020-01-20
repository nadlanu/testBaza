<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Confessions;

class ConfessionsController extends Controller
{
    public function addConfession(Request $request) {
        $confession = new Confessions;
        $confession -> id = $request["id"];
        $confession -> text = $request["text"];
        // $confession -> user_id = $request["userId"];
        $confession -> name = $request["name"];
        $confession -> save();
        return response("Success", 200);
    }
    
    public function getConfessions() {
        $confessions = Confessions::orderBy('created_at', 'DESC')->get();
        return $confessions->toJson();
    }

    public function confessionInteract(Request $request) {
        $type = $request["type"];
        $confession = Confessions::find($request["id"]);
        if ( $type == "like" ) {
            $confession -> likes = $confession -> likes + 1;
        } else {
            $confession -> dislikes = $confession -> dislikes + 1;
        }

        $confession -> save();
        
        return $confession;
    }

    public function dislike() {
        //
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use Exception;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index()
    {
        $getAll = Employee::all()->toArray();
        return array_reverse($getAll);
    }

    public function add(Request $request)
    {
        try {
            $a = $request->all();
            if (empty($request->avatar)) {
                $avatar =  'http://'.$request->server('HTTP_HOST').'/image/defaultImg.jpg';
            }
            else {
                $avatar = $request->avatar;
            }
            $post = new Employee([
                'name' => $request->input('name'),
                'old' => $request->input('old'),
                'position' => $request->input('position'),
                'part' => $request->input('part'),
                'status' => $request->input('status'),
                'avatar' => $avatar,
            ]);
            $post->save();
            return response()->json('Đã Thêm nhân viên mới');
        } catch (Exception $e) {
            return response()->json($e);
        }
    }
 
    // edit post
    public function edit($id)
    {
        $post = Employee::find($id);
        return response()->json($post);
    }
 
    // update post
    public function update($id, Request $request)
    {
        try {
            $post = Employee::find($id);
            $post->update([
                'name' => $request->name,
                'old' => $request->old,
                'position' => $request->position,
                'part' => $request->part,
                'avatar' => $request->avatar,
                'status' => $request->status,
            ]);
            return response()->json('Cập nhật thông tin thành công');
        } catch (Exception $e) {
            return response()->json($e);
        }
    }
 
    // delete post
    public function delete($id)
    {
        $post = Employee::find($id);
        $post->delete();
 
        return response()->json('Đã xóa');
    }
}

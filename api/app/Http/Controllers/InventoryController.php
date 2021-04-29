<?php

namespace App\Http\Controllers;

use App\Models\inventory;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
class InventoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\inventory  $inventory
     * @return \Illuminate\Http\Response
     */
    public function list_product(inventory $inventory)
    {
        $product = inventory::all();
        return $product;
    }
    

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create_product(Request $request)
    {
        $product = inventory::create([
            'product_name' => $request->productName,
            'quantity' => $request->quantity,
            'amount' => $request->amount,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Product Successfully Created',
            'reponse' => $product
        ], Response::HTTP_OK);

    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\inventory  $inventory
     * @return \Illuminate\Http\Response
     */
    public function update_product(Request $request)
    {
        $user = inventory::findOrFail($request->id);

        $product = $user->update([
            'product_name' => $request->productName,
            'quantity' => $request->quantity,
            'amount' => $request->amount,
         ]);
 
         //Profile updated, return success response
         return response()->json([
             'success' => true,
             'message' => 'Product updated successfully',
             'response' => $product
         ], Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\inventory  $inventory
     * @return \Illuminate\Http\Response
     */
    public function delete_product(Request $request)
    {
        $product = inventory::find($request->id);
        $product->delete();

        //Profile updated, return success response
        return response()->json([
            'success' => true,
            'message' => 'Product Successfully Deleted!',
            'response' => $product
        ], Response::HTTP_OK);
    }
}

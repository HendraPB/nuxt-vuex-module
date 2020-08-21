<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Cart;

class ProductsCartController extends Controller
{
    public function index()
    {
        return Cart::with('product')
            ->where('user_id', Auth::user()->id)
            ->orderBy('created_at', 'desc')
            ->get();
    }

    public function store(Request $request)
    {
        $item = Cart::where('user_id', Auth::user()->id)->where('product_id', $request->product_id);

        if ($item->count()) {
            $item->increment('quantity', $request->quantity);
            $item = $item->first();
        } else {
            $item = Cart::forceCreate([
                'user_id' => Auth::user()->id,
                'product_id' => $request->product_id,
                'quantity' => $request->quantity,
            ]);
        }

        return response()->json([
            'quantity' => $item->quantity,
            'product' => $item->product,
        ]);
    }

    public function destroy($productId)
    {
        $item = Cart::where('user_id', Auth::user()->id)->where('product_id', $productId)->delete();

        return response(null, 200);
    }

    public function destroyAll()
    {
        Cart::where('user_id', Auth::user()->id)->delete();
    }
}

@extends('layouts.master')

@section('title')
<h2 class="h2">Products</h2>
@endsection

@section('content')
<div id="addprods"></div>

<div class="row mt-sm-5">
    <table class="table table-striped table-hover">
        <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">SKU</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Quanatity</th>
              <th scope="col">Supplier</th>
              <th scope="col">Note</th>
            </tr>
          </thead>
        <tbody>
            @foreach ($products as $item)
            <tr>
                <th scope="row">{{$item->id}}</th>
                <td>{{$item->SKU}}</td>
                <td>{{$item->title}}</td>
                <td>Rs.{{$item->item_price}}</td>
                <td>{{$item->quantity}}</td>
                <td>{{$item->supplier}}</td>
                <td>{{$item->note}}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>
@endsection
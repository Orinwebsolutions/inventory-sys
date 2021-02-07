@extends('layout')

@section('content')
    <h1>Hello</h1>
    @foreach ($stocks as $item)
        <h3>{{$item->title}}</h3>
    @endforeach
    {{-- {{ $stocks}} --}}

    {{var_dump($errors)}}
@endsection
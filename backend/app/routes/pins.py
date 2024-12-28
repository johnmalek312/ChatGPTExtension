from fastapi import APIRouter, HTTPException, Depends
from typing import List
from ..models.pin import Pin, PinCreate

router = APIRouter(
    prefix="/pins",
    tags=["pins"]
)

@router.post("/", response_model=Pin)
async def create_pin(pin: PinCreate):
    """Template for creating a new pin"""
    # TODO: Implement pin creation logic with Firebase
    pass

@router.get("/{user_id}", response_model=List[Pin])
async def get_user_pins(user_id: str):
    """Template for getting all pins for a user"""
    # TODO: Implement getting user pins from Firebase
    pass

@router.get("/{user_id}/{chat_id}", response_model=List[Pin])
async def get_chat_pins(user_id: str, chat_id: str):
    """Template for getting all pins in a specific chat"""
    # TODO: Implement getting chat pins from Firebase
    pass

@router.delete("/{pin_id}")
async def delete_pin(pin_id: str):
    """Template for deleting a pin"""
    # TODO: Implement pin deletion logic
    pass 
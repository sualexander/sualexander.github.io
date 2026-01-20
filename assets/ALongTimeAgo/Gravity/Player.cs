using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMvmt : MonoBehaviour
{
    public CharacterController controller;

    public float speed = 12f;
    public float gravity = 10f;
    public float jumpHeight = 3f;
    public float rotateSpeed;
    public Transform playerBody, playerParent;

    public Transform groundCheck;
    public float groundDistance = 0.2f;
    public LayerMask groundMask;

    Vector3 velocity, movement;
    bool isGrounded, wait;

    float rotationProgress = -1;
    float x, y, z;

    Quaternion startRotation, endRotation;

    void Update()
    {
        Quaternion? targetRotation = null;

        if (Input.GetKeyDown("g") && !wait)
        {
            startRotation = playerBody.localRotation;
            y = (startRotation.eulerAngles[1] - (startRotation.eulerAngles[1] % 90));
            targetRotation = Quaternion.Euler(0f, y, 180f);
        }
        else if (Input.GetKey("left shift") && Input.GetKeyDown("t") && !wait)
        {
            startRotation = playerBody.localRotation;
            y = startRotation.eulerAngles[1] % 90;
            if (y >= 45)
            {
                y = (startRotation.eulerAngles[1] + (90 - y));
            }
            else
            {
                y = (startRotation.eulerAngles[1] - (startRotation.eulerAngles[1] % 90));
            }

            targetRotation = Quaternion.Euler(90f, y, 0f);
        }
        else if (Input.GetKeyDown("t") && !wait)
        {
            startRotation = playerBody.localRotation;
            y = startRotation.eulerAngles[1] % 90;
            if (y >= 45)
            {
                y = (startRotation.eulerAngles[1] + (90 - y));
            }
            else
            {
                y = (startRotation.eulerAngles[1] - (startRotation.eulerAngles[1] % 90));
            }

            targetRotation = Quaternion.Euler(-90f, y, 0f);
        }
        else if (Input.GetKey("left shift") && Input.GetKeyDown("f") && !wait)
        {
            startRotation = playerBody.localRotation;
            y = (startRotation.eulerAngles[1] - (startRotation.eulerAngles[1] % 90));
            targetRotation = Quaternion.Euler(0f, y, -90f);
        }
        else if (Input.GetKeyDown("f") && !wait)
        {
            startRotation = playerBody.localRotation;
            y = (startRotation.eulerAngles[1] - (startRotation.eulerAngles[1] % 90));
            targetRotation = Quaternion.Euler(0f, y, 90f);
        }

        if (targetRotation.HasValue)
        {
            endRotation = playerParent.rotation * targetRotation.Value;
            playerBody.localRotation = Quaternion.identity;
            rotationProgress = 0;
        }

        if (rotationProgress < 1 && rotationProgress >= 0)
        {
            wait = true;
            rotationProgress += Time.deltaTime * rotateSpeed;
            playerParent.localRotation = Quaternion.Lerp(startRotation, endRotation, rotationProgress);
        }
        else
        {
            wait = false;
        }

        // Jump
        isGrounded = Physics.CheckSphere(groundCheck.position, groundDistance, groundMask);

        if (Input.GetButtonDown("Jump") && isGrounded)
        {
            velocity.y = Mathf.Sqrt(jumpHeight * 2f * gravity);
        }

        if (wait)
        {
            velocity.y = 0;
        }
        else
        {
            velocity.y -= gravity * Time.deltaTime;
        }
        movement = transform.TransformDirection((velocity * Time.deltaTime));
        controller.Move(movement);

        // Movement
        float x = Input.GetAxis("Horizontal");
        float z = Input.GetAxis("Vertical");

        Vector3 move = transform.right * x + transform.forward * z;
        controller.Move(move * speed * Time.deltaTime);
    }
}

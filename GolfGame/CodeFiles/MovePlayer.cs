using UnityEngine;

using System.Collections;

using System;


public class MovePlayer : MonoBehaviour 
{
	

	public Rigidbody rb;

	
	public float turnSpeed = 20.0f;

	
	public float speed;

	
	private AudioSource clubHit;

	

	void Awake(){
		
		clubHit = GetComponent <AudioSource> ();
	
	}
	

	void Start () 
	{
		
		rb = GetComponent<Rigidbody> ();

	
		//SET INITIAL VELOCITY
		
		rb.velocity = new Vector3(-speed,0,0);


	

	}
	
	
	void Update() 
	{

		
		if(Math.Abs(rb.velocity.x) > rb.velocity.z / 10)
{
			
			if (Input.GetKey (KeyCode.RightArrow)){
				
				rb.velocity = new Vector3 (rb.velocity.x, 
rb.velocity.y,
 rb.velocity.z + 
				(Time.deltaTime * Math.Abs(rb.velocity.x) * turnSpeed) + Time.deltaTime * turnSpeed);
			
				}

			
			if (Input.GetKey (KeyCode.LeftArrow))
{
				
				rb.velocity = new Vector3 (rb.velocity.x, 
rb.velocity.y,
 rb.velocity.z - 
				(Time.deltaTime * Math.Abs(rb.velocity.x) * turnSpeed - Time.deltaTime * turnSpeed));
			
				}
			
			if (Input.GetKeyDown (KeyCode.UpArrow))
{

				StartCoroutine (Action ());
			
				Score.score += 100;
		
			}
			

			if (Input.GetKeyDown (KeyCode.DownArrow)) {

				rb.velocity = new Vector3 (0, 0, 0);

			
				rb.velocity = new Vector3 (speed, rb.velocity.y, rb.velocity.z);

				}
	
			}

	

	IEnumerator Action(){
		
		rb.velocity = new Vector3 (0, 0, 0);

		
		yield return new WaitForSeconds (0.2f);

		
		rb.velocity = new Vector3 (-speed, rb.velocity.y, rb.velocity.z);
		
		clubHit.Play ();
	
		}
		


	}
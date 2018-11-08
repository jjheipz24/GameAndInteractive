using UnityEngine;

using System.Collections;



public class CameraFollow : MonoBehaviour {
	
	public Transform target;
	
	public Vector3 offSet;

	

	void Start () {
}
	
	
	void LateUpdate () {
transform.position = target.position + offSet;
}


}
